import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    const decreClick = () => {
        count > 0 ? setCount(count - 1) : setCount(0);
    }
    const resetClick = () => {
        setCount(0);
    }
  return (
      <div className='mt-10'>
          
          <h5 className='ml-9 font-bold'>Counter :{ count} </h5>

          <button className='bg-amber-600 text-white font-semibold w-30 h-12 rounded-full ml-9' onClick={handleClick}>Increment</button>
          <button className='bg-amber-600 text-white font-semibold w-30 h-12 rounded-full ml-9' onClick={decreClick} >Decrement</button>
          <button className='bg-amber-600 text-white font-semibold w-30 h-12 rounded-full ml-9' onClick={resetClick}>Reset</button>
      </div>
  )
}

export default Counter