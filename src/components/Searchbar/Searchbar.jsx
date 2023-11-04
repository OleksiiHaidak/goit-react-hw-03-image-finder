import React, { Component } from 'react';
import Notiflix from 'notiflix';
import css from 'components/Searchbar/Searchbar.module.css';


export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = evt => {
    this.setState({inputValue: evt.target.value});
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.inputValue.trim().toLowerCase() === '') {
    Notiflix.Notify.info('Please enter your request', {position: 'center-center', fontSize: '16px'});
    return;
  }
  this.props.onSubmit(this.state.inputValue);
  };


  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  };
};