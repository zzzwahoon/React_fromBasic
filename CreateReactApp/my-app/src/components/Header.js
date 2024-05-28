import React from 'react'
import logo from '../logo.svg';


export default function Header() {
  const name = 'Zzzwa';
  const count = 0;
  const memo = '';

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
          
          {name === 'Zzzwa' 
            ? `Hello, ${name}! Learn React` 
            : `Welcome, ${name}! Learn React`}
          
          <div>{!!count && <h1>Message: {count}</h1>}</div> 
        </a>
        {memo !== null && `memo: ${memo}`}
    </header>
  )
}


