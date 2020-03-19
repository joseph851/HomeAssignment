const initialState = {
  result: [],
  loading: true,
};

export default function(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case 'RESULT':
      return {
        ...state,
        result: payload,
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
