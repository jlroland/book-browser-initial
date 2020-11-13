import React, { Component } from 'react';


class DisplayBooks extends Component {
    
    render () {
        
        return (
            <div className="container-fluid book-list">
                        <div className="row justify-content-center">
                            {this.props.bookList.map(book => (
                                <div key={book.id} className="col-4 border border-dark">
                                    <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://i.imgur.com/J5LVHEL.jpg"} alt="Book cover"/>
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