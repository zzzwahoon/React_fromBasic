import React, { useState } from 'react'
// Hook 함수

export default function Counter() {
  // 값, 값을 변경할 때 사용할 함수
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button> 
      <br />
      Counter : {count}
    </div>
  )
}
