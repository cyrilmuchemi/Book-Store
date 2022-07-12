const ADD = 'bookstore/book/ADD';
const REMOVE = 'bookstore/book/REMOVE';

export const addBook = (book) => ({ type: ADD, book });

export const removeBook = (book) => ({ type: REMOVE, book });

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD: return [...state, action.book];
    case REMOVE: return state.filter(((item) => item.id !== action.book.id));
    default: return state;
  }
};

export default bookReducer;
