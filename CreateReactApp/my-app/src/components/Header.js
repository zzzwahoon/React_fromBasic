import React from 'react'
import logo from '../logo.svg';

const Header = (props) => {
  // props: object(객체)
  // props를 다룰 때는 반드시 순수 함수처럼 동작해야 한다.
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        {props.title}
        </a>
    </header>
  )
}

export default Header