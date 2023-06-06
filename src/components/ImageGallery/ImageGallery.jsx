import { Component } from "react";
import style from './ImageGallery.module.css'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from 'components/Button/Button'
import { getPicFromPixabay } from "../servise/api";
import { Modal } from "components/Modal/Modal";
import { TfiClose } from "react-icons/tfi";
import { Loader } from "components/Loader/Loader";
import PropTypes from 'prop-types';



export class ImageGallery extends Component {
	state={
		searchPictures: [],
		showModal: false,
		imgUrl: '',
		page: 1,
		loader: false,
	}
	getFullImage=(img) =>{
		this.setState({
			imgUrl: img,
    });
	}

	toggleModal=()=> {
		this.setState(({ showModal }) => ({
			showModal: !showModal,
		}))
  };
	async componentDidUpdate(prevProps, prevState) {
		const { name } = this.props;
		const firstPage = 1;
		if (prevProps.name !== name) {
			this.setState({ searchPictures: []});
      try {
				this.setState({ loader: true});
        const pictures = await getPicFromPixabay(name, firstPage);
				this.setState({ searchPictures: [...pictures.hits], page: 1, loader: false})
      } catch (error) {
        console.log(error);
      }
    }
	}

	getNewPictures= async ()=>{
		const { name } = this.props;
		const { page, searchPictures } = this.state;
		this.setState(state=> ({page: state.page+1}));
		const newPage= page+1;
		try {
			this.setState({ loader: true});
			const pictures = await getPicFromPixabay(name, newPage);
			this.setState({ searchPictures: [...searchPictures, ...pictures.hits], loader: false });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const { searchPictures, showModal, imgUrl, loader } = this.state;
		if(loader && searchPictures.length === 0){
			return (<Loader />)
		}
		if(showModal){
			return (<Modal fullImage={imgUrl} onClose={this.toggleModal}>
						<button type="button" className={style["button-close"]} onClick={this.toggleModal}>
								<TfiClose className={style.pic}/>
						</button>
					</Modal>)
		}
		if(searchPictures.length > 0){
			return (<>
					<ul className={style.imageGallery}>
							<ImageGalleryItem pictures={searchPictures} onOpen={this.toggleModal} getImage={this.getFullImage}/>
					</ul>
					{loader ? <Loader /> : <Button onClick={this.getNewPictures}/>}
			</>)
		}
	}
};

ImageGallery.propTypes = {
	name: PropTypes.string.isRequired,
}