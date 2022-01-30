import React from 'react'
import '../styles/wordl.css'

const Input = ({setGuess, setCounter, count }) => {
  return (
          <input tabIndex="0" autoFocus className="m4 text-field outline bg-mute" autoComplete='off' name="guess" id="guess" type="text" maxLength="5"
          onChange={(e) => {
            let guess = e.target.value;
            if (guess.length === 5) {
              setGuess(guess.toUpperCase())
              setCounter(count+1);
            }
          }} />)
}

export default Input;
