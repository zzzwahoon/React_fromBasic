import React from 'react'

export default function Counter() {
  let count = 0;
  return (
    <div>
      <button onClick={() => (count += 1)}>+1</button> 
      <br />
      Counter : {count}
    </div>
  )
}
