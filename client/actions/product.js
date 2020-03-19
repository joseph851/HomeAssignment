export const signup = product => {
  return {
    type: 'SIGN_UP',
    payload: {
      product: product,
    },
  };
};

//get all products
// export const getProducts = () => {
//   return {
//     type: 'GET_PRODUCTS',
//     payload: {},
//   };
// };

export const getResult = name => {
  return {
    type: 'GET_RESULT',
    payload: {
      name: name,
    },
  };
};

export const getSearch = name => {
  return {
    type: 'GET_SEARCH',
    payload: {
      name: name,
    },
  };
};

export const getList = (num, cat) => {
  return {
    type: 'GET_LIST',
    payload: {
      num: num,
      cat: cat,
    },
  };
};

export const setLoad = () => {
  return {
    type: 'LOADING',
    payload: {},
  };
};
