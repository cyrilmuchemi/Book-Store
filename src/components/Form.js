import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook(inputs));
  };
  return (
    <div>
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={inputs.title || ''} onChange={handleChange} />
        <input type="text" placeholder="Author" value={inputs.author || ''} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
