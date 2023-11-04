import React, { Component } from "react";
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onImageClick(this.props.post);
  };

  render() {
    const {post} = this.props;

    return (
      <li key={post.id} className={css.ImageGalleryItem}>
        <img src={post.webformatURL} alt={post.tags} onClick={this.handleClick} className={css.ImageGalleryItemImage} />
      </li>
    );
  };
};