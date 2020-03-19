const initialState = {
  products: [],
};

export default function(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case 'Entertainment':
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
}
