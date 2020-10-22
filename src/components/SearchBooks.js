import React, { Component } from 'react';

class SearchBooks extends Component {
    render () {
        return (
            <div>
                <form id="book-search-form">
                    <input type="text" placeholder="Enter title or author"></input>
                    <input type="radio" value="title"></input>
                    <label>Title</label>
                    <input type="radio" value="author"></input>
                    <label>Author</label>
                </form>
            </div>
        )
    }
}

export default SearchBooks;
