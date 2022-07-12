const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const checkStatus = (status) => ({ type: CHECK_STATUS, status });

const categoriesReducer = (state = '', action) => {
  switch (action.type) {
    case CHECK_STATUS: return 'Not complete';
    default: return state;
  }
};

export default categoriesReducer;
