import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { BookList } from './BookList';
import { removeBook } from '../redux/books/books';

export class Container extends React.PureComponent {
  render() {
    const listing = useSelector((state) => state.bookReducer, shallowEqual);
    const dispatch = useDispatch();
    const deleteBook = (id) => {
      dispatch(removeBook(id));
    };
    return (
      <div>
        <BookList listing={listing} deleteBook={deleteBook} />
      </div>
    );
  }
}

export default Container;
