const loadWords = (dataURL, words) => (dispatch, getState) => {
  dispatch({
    type: 'LOADING'
  });

  dispatch({
    type: 'LOAD_WORDS',
    dataURL,
  });
};

const nextQuestion = (answer) => (dispatch, getState) => {
  dispatch({
    type: 'LOADING'
  });

  // This is where we check for the test to be over with getState.words length and an extra answer
  const { answers, words } = getState();
  if(answers.length === words.length){
    dispatch({
      type: 'CALCULATE_SCORE'
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
}