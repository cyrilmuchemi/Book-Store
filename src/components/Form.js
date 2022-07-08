import React from 'react';

export class Form extends React.PureComponent {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Author" />
        </form>
      </div>
    );
  }
}

export default Form;
