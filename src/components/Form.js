import React from 'react';

export class Form extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>Add a new book</h2>
        <form>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Author" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
