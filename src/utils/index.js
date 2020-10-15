import React from 'react';


/**
 * Method to speak the word via web speech API
 * @param {string} activeWord The word to speak
 */
export const speakWord = (activeWord) => {
  const msg = new SpeechSynthesisUtterance();
  const voices = window.speechSynthesis.getVoices();

  msg.voice = voices[33]; // Note: some voices don't support altering params
  msg.voiceURI = 'native';
  msg.volume = 1; // 0 to 1
  msg.rate = .75; // 0.1 to 10
  msg.pitch = 1; //0 to 2
  msg.text = activeWord;
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}



/**
 * Method to calculate score from correct and incorrect answers
 * @param {object} props Props from the main caller
 */
export const calculateScore = (props) => {
  const { words, answers } = props;
  let score;
  let wrongAnswerIndex = [];

  // Set the wrongAnswerIndex's
  for(let i = 0; i < words.length; i++){
    words[i] === answers[i] ? 'true' : wrongAnswerIndex.push(i);
  }
  score = Math.round(((words.length - wrongAnswerIndex.length) / words.length) * 100);
  return(
    <div>
      <p>You scored: <span className='score'>{score}</span>%</p>
      <p>You missed {wrongAnswerIndex.length} word{wrongAnswerIndex.length === 1 ? '' : 's'}.</p>
      {
        wrongAnswerIndex.map((index) =>
            <p key={index}><span className='miss'>{answers[index]}</span> <em>should be</em> <span className='correct'>{words[index]}</span></p>
        )
      }
    </div>
  )
}