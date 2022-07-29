import React from 'react';
import PropTypes from 'prop-types';
import { Book } from './Book';

const BookList = (props) => {
  const { listing, deleteBook } = props;
  return (
    <ul className="book-list">
      {listing.map((book) => (
        <Book
          key={book[0]}
          book={book}
          deleteBook={deleteBook}
        />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  listing: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookList;
