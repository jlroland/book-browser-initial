import React, { Component } from 'react';
import '../css/App.css';

import SearchBooks from './SearchBooks'
import DisplayBooks from './DisplayBooks'

class App extends Component {
  constructor() {
    super();
    this.state = {
      myBooks: [],
      addedBooks: []
    }
  }

  //need conditional for non-empty myBooks on mounting
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
          <p>Search for books by title or author</p>
          <p>Hover over book to view details or add to the collection</p>
        </header>
        <SearchBooks />
        <DisplayBooks bookList={this.state.myBooks.concat(this.state.addedBooks)}/>
      </div>
    )
  } 
}

export default App;
