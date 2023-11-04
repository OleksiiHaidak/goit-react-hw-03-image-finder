import React, { Component } from "react";

export class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onImageClick(this.props.post);
  };

  render() {
    const {post} = this.props;

    return (
      <li key={post.id} className="ImageGalleryItem">
        <img src={post.webformatURL} alt={post.tags} onClick={this.handleClick}/>
      </li>
    );
  };
};