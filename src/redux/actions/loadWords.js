export const globalMessage = (dataURL, words) => dispatch => {
  dispatch({
    type: 'LOAD_WORDS',
    dataURL,
    words
  });
};

export const clearGlobalMessage = () => dispatch => {
  dispatch({
    type: 'CLEAR_GLOBAL_MESSAGE'
  });
};