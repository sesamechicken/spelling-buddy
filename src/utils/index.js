
export const speakWord = (activeWord) => {
  const synth = window.speechSynthesis; // global speech synth instance
  const utterThis = new SpeechSynthesisUtterance(activeWord);
  synth.speak(utterThis);
}