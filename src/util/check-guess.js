export const pickRandomAnswer = ({answerArr}) => {
  const randomIndex = Math.floor(Math.random() * answerArr.length);
  return answerArr[randomIndex]
}

export const checkGuess = ({guess, answer}) => {
  const answerArr = answer?.toUpperCase()?.split('');
  const guessArr = []
  guess.split("")?.forEach((gLetter, gi) => {
    const gObj = { letter: gLetter, color: 'white' };
    if (answerArr?.includes(gLetter)) {
      gObj.color = 'yellow';
    }
    answerArr?.forEach((aLetter, ai) => {
      if (aLetter === gLetter && ai === gi) {
        gObj.color = 'green';
        return;
      }
      return;
    });
    guessArr.push(gObj)
  });
  return guessArr
};

export const gotWord = ({guessArr = []}) => {
  return guessArr.length && guessArr.every(guess => {
    return guess.color === 'green'});
}
