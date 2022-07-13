const ADD = 'bookstore/book/ADD';
const REMOVE = 'bookstore/book/REMOVE';
const GET_BOOK_FROM_API = 'bookstore/book/GET_BOOK_FROM_API';

export const addBook = async (book) => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YtVxNHXODMWZgorpP7tK/books/';

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: 'Fiction',
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(url, requestOptions);
  const result = await response.text();

  if (result === 'Created') return { type: ADD, payload: book };

  return { type: 'DO_NOT_ADD', payload: book };
};

export const removeBook = async (id) => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YtVxNHXODMWZgorpP7tK/books/';
  const newUrl = url.concat(id);

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow',
  };

  const response = await fetch(newUrl, requestOptions);
  const result = await response.text();

  if (result === 'The book was deleted successfully!') return { type: REMOVE, payload: id };

  return { type: 'DO_NOT_REMOVE', payload: id };
};

export const getBookFromApi = async (dispatch) => {
  try {
    const request = new Request('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YtVxNHXODMWZgorpP7tK/books');
    const response = await fetch(request);
    const res = await response.json();

    dispatch({
      type: GET_BOOK_FROM_API,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD: return { ...state, [action.payload.id]: [{ author: action.payload.author, category: 'Fiction', title: action.payload.title }] };
    case REMOVE: {
      const key = action.payload;
      const { [key]: value, ...newObj } = state;
      return newObj;
    }
    case GET_BOOK_FROM_API: return action.payload;
    default: return state;
  }
};

export default bookReducer;
