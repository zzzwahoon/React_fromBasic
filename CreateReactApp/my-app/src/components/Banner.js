import React, { useState } from 'react';

const Banner = () => {
  const [visible, setVisible] = useState(true);
  // 쿠폰을 받아오는 함수
  const getCoupon = () => {
    alert('10% 할인 쿠폰이 발급되었습니다.');
  };
  const closeBanner = (e) => {
    e.stopPropagation();
    setVisible(false);
  };

  return visible ? (
    <div
      style={{
        backgroundColor: 'orange',
        fontWeight: 'bold',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
      onClick={getCoupon}
    >
      이 곳을 클릭해서 쿠폰을 받아가세요.
      <button onClick={closeBanner}>닫기</button>
    </div>
  ) : null;
};

export default Banner;
