const loadWords = (words) => (dispatch) => {
  dispatch({
    type: 'LOADING'
  });

  dispatch({
    type: 'LOAD_WORDS',
    words,
  });

  dispatch({
    type: 'LOAD_WORDS_OK',
    words,
  });
};

const nextQuestion = (answer) => (dispatch, getState) => {
  dispatch({
    type: 'LOADING'
  });

  // This is where we check for the test to be over with getState.words length and an extra answer
  const { currentWord, words } = getState();
  if((currentWord + 1) === words.length){
    dispatch({
      type: 'CALCULATE_SCORE',
      answer
    });
  } else {
    dispatch({
      type: 'NEXT_QUESTION',
      answer
    });
  }
};

export default {
  nextQuestion,
  loadWords
};
