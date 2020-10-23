import React, { Component } from 'react';

class SearchBooks extends Component {

    constructor() {
        super();
        this.state = {
          searchResults: [],
          query: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit() {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=+in${title}:${query}`)
        .then(response => response.json())
        .then(result => {
            const returnedBooks = result.map(book => {
                return book;
            });
            this.setState({
                searchResults: returnedBooks,
                query: ''
            });
        }
    }

    render () {
        return (
            <div>
                <form id="book-search-form" onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" value={this.state.query} placeholder="Enter title or author"></input>
                    </div>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="radio" id="title" name="search-type" value="title"></input>
                        <label htmlFor="author">Author</label>
                        <input type="radio" id="author" name="search-type" value="author"></input>
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBooks;
