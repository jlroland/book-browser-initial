import React, { Component } from 'react';
import '../css/App.css';

import SearchBooks from './SearchBooks'
import DisplayBooks from './DisplayBooks'

class App extends Component {
  constructor() {
    super();
    this.state = {
      myBooks: []
    }
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const books = result.map(book => {
          return book;
        });
        this.setState({
          myBooks: books
        });
      });
  }

  render () {

    return (
      <div className="App">
        <header>
          <h1>Welcome to Book Browser</h1>
          <p>Search for books by title or author.</p>
          <p>Bookmark up to 10 books.</p>
        </header>
        <SearchBooks />
        <DisplayBooks myBooks={this.state.myBooks}/>
      </div>
    )
  } 
}

export default App;
