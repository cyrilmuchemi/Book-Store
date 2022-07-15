import React from 'react';
import PropTypes from 'prop-types';

export const Book = ({ book, deleteBook }) => {
  const { author, title, category } = book[1][0];
  const id = book[0];

  return (
    <li className="book-li">
      <div>
        <p className="category">{category}</p>
        <h2>{title}</h2>
        <p className="author">{author}</p>
        <div>
          <button className="my-button" type="button">Comments</button>
          <span className="book-space">|</span>
          <button className="my-button" type="button" onClick={() => deleteBook(id)}>Remove</button>
          <span className="book-space">|</span>
          <button className="my-button" type="button">Edit</button>
        </div>
      </div>
      <div className="progress-section">
        <div className="progress" />
        <div>
          <p className="Percent-Complete">64%</p>
          <p className="Completed">Completed</p>
        </div>
      </div>
      <div className="chapter">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter-number">Chapter 17</p>
        <button className="Update-progress" type="button">Update progress</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
