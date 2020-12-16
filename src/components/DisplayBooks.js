import React, { Component } from 'react';


class DisplayBooks extends Component {
    
    render () {
        
        return (
            <div className="container-fluid book-list">
                <div className="row justify-content-center">
                    {this.props.bookList.map(book => (
                        <div key={book.id} className="col-4 border border-dark">
                            <div className="card-flip">
                                <div className="card-front">
                                    <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://i.imgur.com/J5LVHEL.jpg"} alt="Book cover"/>
                                    <h3>{book.volumeInfo.title}</h3>
                                    <p>{book.volumeInfo.authors}</p>
                                </div>
                                <div className="card-back">
                                    <h3>{book.volumeInfo.title}</h3>
                                    <p className="description">{book.volumeInfo.description ? book.volumeInfo.description : 'No description available'}</p>
                                </div>
                            </div>  
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default DisplayBooks