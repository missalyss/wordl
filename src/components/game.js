import React, {useState, useEffect} from 'react'
import Row from './row';
import '../styles/home.css'
import '../styles/wordl.css'

import { checkGuess, gotWord, pickRandomAnswer } from '../util/check-guess';
const answerArr = ['pants', 'grind', 'hotel', 'fiend', 'ought', 'clamp', 'tried', 'trial', 'farse', 'reads', 'stone', 'cried', 'close', 'nasty', 'stand', 'dance', 'punch']
const answer = pickRandomAnswer({answerArr})

const Game = () => {
  const [guess, setGuess] = useState('');
  const [isWinner, setWinner] = useState(false);

  const guessArr = checkGuess({guess, answer})

  useEffect(() => {
    if (guessArr && gotWord({guessArr})) {
      setWinner(true)
    }
  }, [guessArr])

  return (
    <div className={`flex flex-column height-100 align-center container ${isWinner ? 'winner' : ''}`}>
      <main className="main">
        <h1 className="title">
          wordl
        </h1>

        <div className="flex flex-column">
          <Row guess={guessArr} isWinner={isWinner}/>
          {/* <Row /> */}
          {/* <Row /> */}
          {/* <Row /> */}
          {/* <Row /> */}
          <input tabIndex="0" autoFocus onLoad={() => {console.log('calmn')}} className="m4 text-field" autoComplete='off' name="guess" id="guess" type="text" placeholder='' maxLength="5"
          onChange={(e) => {
            let guess = e.target.value;
            if (guess.length === 5) {
              setGuess(guess.toUpperCase())
            }
          }} />
        </div>
      </main>
        {isWinner &&
        <marquee className="winMarquee mt7">You did it!!! Amazing!!! The smartest person in the world!!!</marquee>
        }

      <footer className="footer">
        <p>Made with ❤️ by alyssa</p>
      </footer>
    </div>
  )
};

export default Game;
