import React, { Component } from 'react';
import DisplayBooks from './DisplayBooks'

class SearchBooks extends Component {

    constructor() {
        super();
        this.state = {
          searchResults: [],
          query: ''
        };

        this.queryChange = this.queryChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    queryChange(e) {
        this.setState({query: e.target.value})
    }

    handleChange(e) {
        this.setState({searchType: e.target.value})
    }

    handleSubmit(e) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=+in${this.state.searchType}:${this.state.query}`)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                const returnedBooks = result.items.map(book => {
                    return book;
                });
                this.setState({
                    searchResults: returnedBooks,
                    searchType: '',
                    query: ''
                });
            });
        e.preventDefault();
    }

    render () {
        return (
            <div>
                <form id="book-search-form" onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" value={this.state.query} placeholder="Enter title or author" onChange={this.queryChange}></input>
                    </div>
                    <div onChange={this.handleChange}>
                        <label htmlFor="title">Title</label>
                        <input type="radio" id="title" name="search-type" value="title"></input>
                        <label htmlFor="author">Author</label>
                        <input type="radio" id="author" name="search-type" value="author"></input>
                        <button type="submit">Search</button>
                    </div>
                </form>
                <div>
                    <DisplayBooks bookList={this.state.searchResults} />
                </div>
            </div>
        )
    }
}

export default SearchBooks;
