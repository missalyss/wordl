export const pickRandomAnswer = ({answerArr}) => {
  const randomIndex = Math.floor(Math.random() * answerArr.length);
  return answerArr[randomIndex]
}

export const checkGuess = ({guess, answer}) => {
  const answerArr = answer?.toUpperCase()?.split('');
  console.log('answerArrindex: ', answerArr);

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
  const result = guessArr.length && guessArr.every(guess => {
    console.log('!!!!!!!!!!!!!!guess.colo: ', guess.color);
    return guess.color === 'green'});
  console.log('result: ', result);
  return result;
}
