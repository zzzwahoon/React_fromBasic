import React, { useRef, useState } from 'react';
import Cat from './Cat';

// Cat 안에 있는 image 사이즈를 알고싶다
export default function CatParent() {
  const catRef = useRef();

  console.log('Parent component CatParent');
  console.log(catRef);

  const ageRef = useRef(1);
  const [state, setState] = useState(1);
  console.log(ageRef.current);

  return (
    <div>
      <h4> 고양이가 세상을 구한다 </h4>
      <div>
        <Cat a={'a'} ref={catRef} />
        <h3>age: {ageRef.current}</h3>
        <h4>State: {state}</h4>
        <button onClick={() => alert(catRef.current.height)}>
          고양이 크기를 알고 싶어
        </button>
        <button onClick={() => (ageRef.current = ageRef.current + 1)}>
          age Up
        </button>
        <button onClick={() => setState(state + 1)}>test</button>
      </div>
    </div>
  );
}
