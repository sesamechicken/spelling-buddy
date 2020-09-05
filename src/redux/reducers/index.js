const initialState = {
  dataURL: null,
  words: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GLOBAL_MESSAGE':
      return {
        message: action.msg,
        className: action.className,
        id: action.id
      };
    case 'CLEAR_GLOBAL_MESSAGE':
      return {
        message: null,
        type: null,
        id: null
      };
    default:
      return state;
  }
};

export default rootReducer;