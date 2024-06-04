import React, { useRef } from 'react';

// ref를 활용 -> 비제어 컴포넌트 방식으로 Form 만들기
export default function () {
  const inputRef = useRef();
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  function handleSubmit(e) {
    e.preventDefault();
    alert(inputRef.current.value);
    inputRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username : </label>
      <input
        type="text"
        name="username"
        // onChange={handleChange}
        ref={inputRef}
      />
      <input type="submit" value="submit" />
    </form>
  );
}
