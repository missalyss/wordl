import React from 'react'
import '../styles/wordl.css'

const Row = ({guess = [], isWinner }) => {
  return (
    <div className={`flex flex-row row m4 p4`} >
      {guess.map((guessObj, i) => {
          return (
          <span key={i} className={`flex justify-center align-center ${guessObj?.color} ${isWinner ? 'winSpin' : null} m2 p3 letter`}>{guessObj?.letter}</span>
        )
      })}
    </div>

  )
}

export default Row;
