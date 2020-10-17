const initialState = {
  dataURL: null,
  words: localStorage.getItem('words')?.split(',') || [],
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
      };
    case 'LOAD_WORDS':
      localStorage.setItem('words', action.words);
      return {
        ...state,
        loading: false,
        words: [...action.words]
      };
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