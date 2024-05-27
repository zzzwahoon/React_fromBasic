import logo from './logo.svg';
import './App.css';

function App() {
  const message = 'Learn React';

  // const getGreetingMessage = (name) => {
  //   if (name === 'Zzzwa') return `Hello, ${name}! Learn React`;
  //   return `Welcome, ${name}! Learn React`;
  // };

  const name = 'Zzzwa';
  const count = 0;
  const memo = '';
  
  return (
    <div className="App" tabIndex={0}>
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
      <input type="checkbox" name="agreement" id="agreement-el" />
      <label htmlFor="agreement-el">I agree</label>
    </div>
  );
}

export default App;
