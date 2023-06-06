import { Component } from "react";
import style from "./ImagegalleryItem.module.css";
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
	render() {
		const { pictures, onOpen, getImage } = this.props;
		return (<>
          {pictures.map(({id, webformatURL, largeImageURL  }) => (
          <li key={id} className={style.imageGalleryItem} onClick={()=>{onOpen(); getImage(largeImageURL) }}>
            <img src={webformatURL} alt="" className={style["imageGalleryItem-image"]}/> 
        </li>
    ))}
    </>);
	}
};

ImageGalleryItem.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
    onOpen: PropTypes.func.isRequired,
}

