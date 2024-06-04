import React, { useRef, useState } from 'react';
import Cat from './Cat';

// Cat 안에 있는 image 사이즈를 알고싶다
export default function CatParent() {
  const catRef = useRef();
  const [height, setHeight] = useState(0);

  const catCallbackRef = (node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  };

  console.log('Parent component CatParent');
  // console.log(catRef);

  const ageRef = useRef(1);
  // console.log(ageRef.current);

  return (
    <div>
      <h4> 고양이가 세상을 구한다 </h4>
      <div>
        <Cat a={'a'} ref={catCallbackRef} />
        <h3>age: {ageRef.current}</h3>
        <h4>height: {height}</h4>
        {/* <button onClick={() => alert(catRef.current.height)}>
          고양이 크기를 알고 싶어
        </button> */}
        <button onClick={() => (ageRef.current = ageRef.current + 1)}>
          age Up
        </button>
        {/* <button onClick={() => setState(state + 1)}>test</button> */}
      </div>
    </div>
  );
}
