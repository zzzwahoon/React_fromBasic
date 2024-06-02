import React, { useEffect, useState } from 'react';
import datas from './data/cards';
import BusinessCard from './components/BusinessCard';

// 1. 데이터 초기화
// 명함 리스트는 데이터 베이스에 저장되어 있습니다.
// 우리는 아직 api 를 호출하는 방법을 배우지 않았기 때문에, api 호출 할 필요는 없습니다.
// 다만 api 호출을 한다고 가정하고, 전달 드리는 명함 리스트를 알맞은 위치에서 초기화 해주세요.

// 2. 추첨하기 버튼과 명함 컴포넌트 구현
// 추첨하기 버튼을 누르면, 1에서 초기화 한 명함 리스트 중 하나의 명함을 고릅니다.
// 추첨된 명함 정보를 명함 컴포넌트에 전달하는 방식으로 구현합니다.
// 2-1. 상세 조건
// 추첨하기 버튼을 눌렀을 때, 동일한 사람이 또 다시 추첨되면 안되기 때문에 당첨자는 응답 받은 배열에서 제거합니다.
// 2-2. 상세 조건
// 당첨자는 나중에 확인하기 위해, 별도의 데이터로 저장하고 있어야 합니다.
// 2-3. 참고 사항
// 명함 컴포넌트의 디자인은 없어도 괜찮습니다.
// 명함 리스트가 초기화 되기 전까지, 명함 컴포넌트는 렌더링 되지 않습니다.
// 추첨하기 버튼을 두(n)번째 눌렀을 때, 이전에 처음(n-1) 그렸던 명함은 사라지고 두번 째 명함 정보만 렌더링 되면 됩니다.

// 3. 추첨 완료 기능 구현
// 추첨하기 버튼을 4번 째 누르면, “이미 3명의 추첨을 완료했습니다. 당첨자는 AAA, BBB, CCC 입니다.”
// 라는 window.alert() 을 띄운다.

// App - 부모 컨포넌트
// BusinessCard - 자식 컨포넌트

// 추첨하기 버튼과 명함 컴포넌트 구현
export default function App() {
  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  // 추첨하기 버튼을 누르면, 랜덤하게 하나의 명함을 고른다.
  function draw() {
    // 조건 추가
    if (pickedCards.length >= 3) {
      const names = pickedCards.reduce((acc, cur) => {
        return acc = acc.concat(`${cur.name}, `)
      }, '')
      return alert(`이미 3명의 추첨을 완료했습니다. 당첨자는 ${names} 입니다.`);
    }

    // 랜덤하게 하나의 명함을 고른다.
    
    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    // 중복제거 (phoneNumber가 제일 unique)
    setCards(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber));

    // 당첨자(array) 관리 (별도로 저장)
    setPickedCards([...pickedCards, randomItem]);
  }

  // 1. 데이터 초기화
  useEffect(() => {
    setCards(datas);
  }, []);

  return (
    <div>
      {cards.length > 0 && <button onClick={draw}>추첨하기</button>}

      {/* 가장 최근에 뽑힌 명함정보 넘기기 */}
      {pickedCards.length > 0 && (
        <BusinessCard info={pickedCards[pickedCards.length - 1]} />
      )}
    </div>
  );
}
