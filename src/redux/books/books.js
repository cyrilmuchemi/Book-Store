const ADD = 'bookstore/book/ADD';
const REMOVE = 'bookstore/book/REMOVE';

export const addBook = (book) => ({ type: ADD, payload: book });

export const removeBook = (id) => ({ type: REMOVE, payload: id });

const bookReducer = (state = [{ id: 1, title: 'Harry Porter', author: 'J.K Rollins' }], action) => {
  switch (action.type) {
    case ADD: return [...state, { id: state.length + 1, ...action.payload }];
    case REMOVE: return state.filter(((item) => item.id !== action.payload));
    default: return state;
  }
};

export default bookReducer;
