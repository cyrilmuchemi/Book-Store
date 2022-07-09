import React from 'react';
import PropTypes from 'prop-types';

export class Book extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { book } = this.props;
    const { title, author } = book;
    return (
      <div>
        <ul>
          <li>{title}</li>
          <li>{author}</li>
        </ul>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
