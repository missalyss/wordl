import React, {useState, useEffect} from 'react'
import Row from './row';
import '../styles/wordl.css'
import '../styles/winner.css'

import { checkGuess, gotWord, pickRandomAnswer } from '../util/check-guess';
import Counter from './counter';
import Input from './input';
const answerArr = ['pants', 'grind', 'hotel', 'fiend', 'ought', 'clamp', 'tried', 'trial', 'farse', 'reads', 'stone', 'cried', 'close', 'nasty', 'stand', 'dance', 'punch']
const answer = pickRandomAnswer({answerArr})

const Game = () => {
  console.log('answer: ', answer);
  const [guess, setGuess] = useState('');
  const [isWinner, setWinner] = useState(false);
  const [count, setCounter] = useState(0);

  const guessArr = checkGuess({guess, answer})

  useEffect(() => {
    if (guessArr && gotWord({guessArr})) {
      setWinner(true)
    }
  }, [guessArr])

  return (
    <div className={`flex flex-column height-100 align-center p3 ${isWinner ? 'winner' : ''}`}>
      <main className="main">
        <h1 className="outline">
          wordl
        </h1>
        <Counter count={count} />
        <div className="flex flex-column">
          <Row guess={guessArr} isWinner={isWinner}/>
          {/* <Row /> */}
          {/* <Row /> */}
          {/* <Row /> */}
          {/* <Row /> */}
<Input setCounter={setCounter} count={count} setGuess={setGuess} />
        </div>
      </main>
        {isWinner &&
        <marquee className="winMarquee mt7">You did it!!! Amazing!!! The smartest person in the world!!!</marquee>
        }

      <footer className="outline">
        <p>Made with ❤️ by alyssa</p>
      </footer>
    </div>
  )
};

export default Game;
