import React, { Component } from 'react'

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
      <div className="Overlay" onClick={this.props.closeModal}>
  <div className="Modal">
    <img src={this.props.modalData.largeImageURL} alt={this.props.modalData.tags} />
  </div>
</div>
    )
  };};