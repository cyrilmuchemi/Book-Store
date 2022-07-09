import React from 'react';
import { BookList } from './BookList';

export class Container extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          id: 1,
          title: 'Harry Porter',
          author: 'J.K Rollins',
        },
        {
          id: 2,
          title: 'Hardy Boys',
          author: 'Franklin W Dixon',
        },
        {
          id: 3,
          title: 'Twilight Eclipse',
          author: 'Stephen Mayer',
        },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <BookList books={books} />
      </div>
    );
  }
}

export default Container;
