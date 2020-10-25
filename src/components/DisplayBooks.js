import React, { Component } from 'react';


class DisplayBooks extends Component {
    // need to add conditional for unavailable images
    render () {
        
        return (
            <div className="container-fluid book-list">
                        <div className="row justify-content-center">
                            {this.props.bookList.map(book => (
                                <div key={book.volumeInfo.industryIdentifiers[0].identifier} className="col-4 border border-dark">
                                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Book cover"/>
                                    <h3>{book.volumeInfo.title}</h3>
                                    <p>{book.volumeInfo.authors}</p>
                                    <button>More Info</button>
                                </div>
                            ))}
                        </div>
            </div>
        );
    }
}

export default DisplayBooks