import React from 'react';

export class Book extends React.PureComponent {
  render() {
    return (
      <div className="display-books">
        <ul>
          <li>Harry Porter</li>
        </ul>
        <div>
          <button type="button">Remove</button>
        </div>
      </div>
    );
  }
}

export default Book;
