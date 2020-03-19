const initialState = {
  search: [],
};

export default function(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case 'SEARCH':
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
}
