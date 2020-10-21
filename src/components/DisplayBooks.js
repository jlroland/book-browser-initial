import React, { Component } from 'react';


class DisplayBooks extends Component {
    render () {
        const savedBooks = this.props.myBooks.map((book, key) => (
            <div key={key}>
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.authors}</p>
            </div>
        ));
        
        return (
        <div>{savedBooks}</div>
        );
    }
}

export default DisplayBooks