const initialState = {
  products: [],
  loading: true,
};

export default function(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case 'Health':
      return {
        ...state,
        products: payload,
        loading: false,
      };
    default:
      return state;
  }
}
