import React, { Component } from "react";
import  {ImageGalleryItem} from "components/ImageGalleryItem/ImageGalleryItem";


export class ImageGallery extends Component {
  render() {
    const posts = this.props.posts;

    return (
      <ul className="ImageGallery">
        {posts !== null && posts.map((post) => (
          <ImageGalleryItem key={post.id} post={post} onImageClick={this.props.onImageClick}/>
        ))}
      </ul>
    );
  };
};