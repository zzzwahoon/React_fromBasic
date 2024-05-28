import React, { useState } from 'react'
// Hook 함수

export default function Counter() {
  // 값, 값을 변경할 때 사용할 함수
  const [count, setCount] = useState(0);  // number
  const [show, setShow] = useState(true); // boolean

  // +, -, *
  const operators = ['+', '-', '*'];      // strings
  const [operator, setOperator] = useState(operators[0]);

  return (
    <div>
      <button 
        onClick={() => {
          let result;
          if (operator === '+') result = count + 1;
          if (operator === '-') result = count - 1;
          if (operator === '*') result = count * 1;
          setCount(result)
        }}
      >
        {operator}1
      </button> 
      <button onClick={() => setShow(!show)}>Show and Hide</button> 
      <button 
        onClick={() => {
          const idx = Math.floor(Math.random() * operators.length);
          setOperator(operators[idx]);
        }}
      >
        Change Operator
      </button> 
      <br />
      {show && `Counter : ${count}`}
    </div>
  )
}
