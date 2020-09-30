const initialState = {
  dataURL: null,
  words: ['doesn\'t', 'cannot', 'winner', 'thanks', 'butterfly'],
  currentWord: 0,
  answers: [],
  loading: false,
  complete: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    case 'LOAD_WORDS':
      console.log(action)
      return {
        ...state,
        loading: false,
        words: [...state.words, action.words]
      }
    case 'NEXT_QUESTION':
      return {
        ...state,
        loading: false,
        currentWord: state.currentWord + 1,
        answers: [...state.answers, action.answer]
      };
    case 'CALCULATE_SCORE':
      return {
        ...state,
        complete: true,
        answers: [...state.answers, action.answer]
      };
    default:
      return state;
  }
};

export default rootReducer;