/* eslint linebreak-style: ["error", "unix"] */
import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export class Category extends React.PureComponent {
  render() {
    const status = useSelector((state) => state.categoriesReducer, shallowEqual);
    const dispatch = useDispatch();
    const showStatus = () => {
      dispatch(checkStatus());
    };
    return (
      <div className="show-status">
        <h1>{status}</h1>
        <button onClick={() => { showStatus(); }} type="button">Check Status</button>
      </div>
    );
  }
}

export default Category;
