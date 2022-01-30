import React from 'react'
import '../styles/wordl.css'

const Counter = ({count}) => {
  return (
    <div className='p6 counter text-center bg-mute' >
      <span>{count}</span>
    </div>

  )
}

export default Counter;
