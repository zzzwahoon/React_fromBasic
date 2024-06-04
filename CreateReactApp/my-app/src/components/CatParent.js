import React, { useRef } from 'react';
import Cat from './Cat';

// Cat 안에 있는 image 사이즈를 알고싶다
export default function CatParent() {
  const catRef = useRef();

  console.log('Parent component CatParent');
  console.log(catRef);

  return (
    <div>
      <h4> 고양이가 세상을 구한다 </h4>
      <div>
        <Cat a={'a'} ref={catRef} />
        <button onClick={() => alert(catRef.current.height)}>
          고양이 크기를 알고 싶어
        </button>
      </div>
    </div>
  );
}
