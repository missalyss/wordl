import React from 'react'
import '../styles/wordl.css'
import '../styles/winner.css'

const Row = ({guess = [], isWinner }) => {
  return (
    <div className={`flex flex-row row m4`} >
      {guess.map((guessObj, i) => {
          return (
          <span key={i} className={`flex justify-center align-center bg-mute ${guessObj?.color} ${isWinner ? 'winSpin' : null} m1 justify-between p3 letter`}>{guessObj?.letter}</span>
        )
      })}
    </div>

  )
}

export default Row;
