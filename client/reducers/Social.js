const initialState = {
  products: [],
  loading: true,
};

export default function(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case 'Social':
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
