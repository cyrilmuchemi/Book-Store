import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import BookList from './BookList';
import { removeBook, getBookFromApi } from '../redux/books/books';

export const Container = () => {
  const listing = Object.entries(useSelector((state) => state.bookReducer, shallowEqual));

  const dispatch = useDispatch();

  useEffect(() => {
    getBookFromApi(dispatch);
  }, [dispatch]);

  const deleteBook = (id) => {
    removeBook(id).then((value) => { dispatch(value); });
  };

  return (
    <BookList listing={listing} deleteBook={deleteBook} />
  );
};

export default Container;
