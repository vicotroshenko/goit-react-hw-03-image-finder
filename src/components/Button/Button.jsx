import { Component } from "react";
import style from './Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
	
	render() {
		const { onClick } = this.props;
		return (
			<div className={style["button-container"]}>
					<button type="button" className={style.button} onClick={onClick}>Show more</button>
			</div>
		)
	}
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
}