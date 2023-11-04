import React, { Component } from 'react';
import Notiflix from 'notiflix';

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
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
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