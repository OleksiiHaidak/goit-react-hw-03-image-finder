import React, {Component} from "react";
import Button from "components/Button/Button";
import {ImageGallery} from "components/ImageGallery/ImageGallery";
import Loader from "components/Loader/Loader";
import Modal from "components/Modal/Modal";
import Searchbar from "components/Searchbar/Searchbar";
import fetchImages from "components/FetchImages/fetchImages";
import css from 'components/styles.css';
import Notiflix from 'notiflix';

export class App extends Component {

  state = {
    posts: [],
    isLoading: false,
    error: null,
    query: "",
    page: 1,
    isOpenModal: false,
    modalData: null,
    noImagesResponse: false,
  }

  openModal = (modData) => {
    this.setState({
      isOpenModal: true,
      modalData: modData,
    });};

  
  closeModal = () => {
    this.setState({
      isOpenModal: false,
      modalData: null,
    });};
  
  
  handleImageClick = (post) => {
  this.setState({
    isOpenModal: true,
    modalData: post,
    });};


  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page || this.state.query !== prevState.query) {
      this.FetchImages();
    };};
  

  FetchImages = async () => {
    const { query, page } = this.state;
      try {
      this.setState({
        isLoading: true,
      });    
        
      const data = await fetchImages(query, page);
        
      if (data.hits.length === 0 && !this.state.noImagesResponse) {
      this.setState({noImagesResponse: true});
        Notiflix.Notify.info('Sorry, there are no images matching your search query', {position: 'center-center', width: '460px', fontSize: '16px'});
      };

      this.setState((prevState) => ({
        posts: prevState.page === 1 ? data.hits : [...prevState.posts, ...data.hits],
      }));
    } catch (error) {
      this.setState({
        error,
      })
    } finally {
      this.setState({
        isLoading: false,
      });
      if (this.state.error) {
        Notiflix.Notify.failure('Oops, something went wrong', { position: 'center-center', fontSize: '16px' });
        };
    }};


  handleSubmit = (query) => {
    this.setState({ query, page: 1 }, () => {
      this.FetchImages();
    });};


  handleInputChange = evt => {
      const {value} = evt.target;
    const inputValue = value.trim().toLowerCase();
    if (inputValue !== "") {
      this.setState({query: inputValue});
    };};
  

  handleClick = () => {
  this.setState(prevState => {
    return {page: prevState.page + 1};
  });};


  render() {
    return (
      <div>
       <Searchbar onSubmit={this.handleSubmit} posts={this.state.posts}/>
       {this.state.isLoading && <Loader />}
       <ImageGallery posts={this.state.posts} onImageClick={this.handleImageClick}/>
       {this.state.isOpenModal &&  <Modal openModal={this.openModal} closeModal={this.closeModal} modalData={this.state.modalData} />}
       {this.state.posts.length >= 12 && <Button onClick={this.handleClick} />}
    </div>
  )}
};