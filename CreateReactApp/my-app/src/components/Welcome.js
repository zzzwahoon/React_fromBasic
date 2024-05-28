import React from 'react'
import bart from '../images/kaws_bartSimpson.jpeg'

export default function Welcome({ withImg, firstName, lastName }) {
  // image + Hello, first name, last name
  // props. 생략법, destructuring 사용해서 받아오기
  return (
    <>

      {withImg && <img src={bart} alt="bartSimpson" height="200"/>}
      <div>Hello!</div>
      <div>
          <span>{firstName}</span>
          {lastName}
      </div>
    </>
  )
}
