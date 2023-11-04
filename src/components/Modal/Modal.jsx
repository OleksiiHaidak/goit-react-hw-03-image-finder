import React, { Component } from 'react'
import css from 'components/Modal/Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.props.closeModal}>
  <div className={css.Modal}>
    <img src={this.props.modalData.largeImageURL} alt={this.props.modalData.tags} />
  </div>
</div>
    )
  };};