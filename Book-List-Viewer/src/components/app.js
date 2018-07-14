import React, { Component } from 'react';
import BooksList from './books-list';
import BookDetail from './book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BooksList />
        <BookDetail />
      </div>
    );
  }
}
