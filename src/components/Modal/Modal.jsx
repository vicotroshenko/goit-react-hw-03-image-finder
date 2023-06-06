import { Component } from "react";
import {createPortal} from 'react-dom';
import style from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown=(event)=> {
    if(event.code ==='Escape'){
      this.props.onClose();
    };
  };
  handleBackdropClick=(event)=> {
    if(event.currentTarget === event.target) {
      this.props.onClose();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  };
	render() {
		return createPortal(
      <div className={style.overlay} onClick={this.handleBackdropClick}>
        <div className={style.modal}>
          {this.props.children}
          <img src={this.props.fullImage} alt="" />
        </div>
      </div>,
      modalRoot
    );
	}
};

Modal.propTypes = {
	fullImage: PropTypes.string.isRequired,
}
