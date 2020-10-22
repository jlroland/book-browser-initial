import React, { Component } from 'react';


class DisplayBooks extends Component {
    // need to add conditional for unavailable images
    render () {
        
        return (
            <div className="book-list">
                {this.props.myBooks.map(book => (
                    <div key={book.volumeInfo.industryIdentifiers[0].identifier}>
                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Book cover"/>
                        <h3>{book.volumeInfo.title}</h3>
                        <p>{book.volumeInfo.authors}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default DisplayBooks