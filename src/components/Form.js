/* eslint linebreak-style: ["error", "unix"] */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [name]: value, id: uuidv4() }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(inputs).then((value) => { dispatch(value); });
  };

  return (
    <div className="add-book">
      <div>
        <hr />
        <h2>ADD NEW BOOK</h2>
      </div>
      <div>
        <form className="book-form" onSubmit={handleSubmit}>
          <input className="form-title" type="text" name="title" placeholder="Book title" value={inputs.title || ''} onChange={handleChange} />
          <input className="form-author" type="text" name="author" placeholder="Book author" value={inputs.author || ''} onChange={handleChange} />
          <button className="submit-btn" type="submit">ADD BOOK</button>
        </form>
      </div>

    </div>

  );
};

export default Form;
