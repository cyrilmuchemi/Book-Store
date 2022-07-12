const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const checkStatus = () => {
  return {type: CHECK_STATUS}
};

const categoriesReducer = (state = '', action) => {
  switch (action.type) {
    case CHECK_STATUS: return 'Under construction';
    default: return state;
  }
};

export default categoriesReducer;
