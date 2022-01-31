import React, {useState, useEffect} from 'react'
import Row from './row';
import '../styles/wordl.css'
import '../styles/winner.css'

import { checkGuess, gotWord, pickRandomAnswer } from '../util/check-guess';
import Counter from './counter';
import Input from './input';
const answerArr = ['pants', 'grind', 'hotel', 'fiend', 'ought', 'clamp', 'cramp', 'stump', 'coral', 'track', 'tried', 'trial', 'farse', 'reads', 'stone', 'cried', 'close', 'nasty', 'stand', 'dance', 'group', 'stamp', 'punch', 'gripe', 'drunk', 'thine', 'phial', 'erase', 'arise', 'enter', 'brain', 'quick', 'brine', 'spire']
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
    <div className={`flex flex-column align-center justify-between content p3 ${isWinner && 'winner'}`}>
      <main className="main">
        <h1 className="outline">
          wordl
        </h1>
        <div className="flex flex-column">
        <Counter count={count} />
          <Row guess={guessArr} isWinner={isWinner}/>
          {/* <Row /> */}
          {/* <Row /> */}
          {/* <Row /> */}
          {/* <Row /> */}
<Input setCounter={setCounter} count={count} setGuess={setGuess} />
{isWinner && <button onClick={() => window.location.reload()}>New Game</button>}
        </div>
      </main>
        {isWinner &&
        <marquee scrollamount="30" className="winMarquee mt7">You did it! Wow! Amazing! The smartest person in the world! Winner!</marquee>
        }

      <footer className="outline">
        <p>Made with ❤️ by alyssa</p>
      </footer>
    </div>
  )
};

export default Game;
