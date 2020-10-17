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
};

/**
 * Method to calculate score from correct and incorrect answers
 * @param {Object} props - payload for method args
 * @param {string} props.words - words from state words
 * @param {string} props.answers - answers from state words
 */
export const calculateScore = ({words, answers}) => {
  let score;
  let wrongAnswerIndex = [];

  // Set the wrongAnswerIndex's
  for(let i = 0; i < words.length; i++){
    words[i] === answers[i] ? 'true' : wrongAnswerIndex.push(i);
  }
  // Calculated as: 
  // words - wrong answers = right answers
  // right answeres / ttl number of words * 100 = percentage
  score = Math.round(((words.length - wrongAnswerIndex.length) / words.length) * 100);
  return(
    <div>
      <p>You scored: <span className='score'>{score}%</span></p>
      <p>You missed {wrongAnswerIndex.length} word{wrongAnswerIndex.length === 1 ? '' : 's'}.</p>
      {
        wrongAnswerIndex.map((index) =>
          <p key={index}><span className='miss'>{answers[index]}</span> <em>should be</em> <span className='correct'>{words[index]}</span></p>
        )
      }
    </div>
  );
};