import { Component } from 'react';
import { RotatingTriangles } from  'react-loader-spinner';
import style from './Loader.module.css';


export class Loader extends Component {
	render() {
		return (<div className={style.spiner}>
								<RotatingTriangles
  								visible={true}
  								height="80"
  								width="80"
  								ariaLabel="rotating-triangels-loading"
  								wrapperStyle={{}}
  								wrapperClass="rotating-triangels-wrapper"
								/>
							</div>
			
		)
	}
}