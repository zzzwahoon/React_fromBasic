import logo from './logo.svg';
import './App.css';

function App() {
  const message = 'Learn React';

  const getGreetingMessage = (name) => {
    if (name === 'Zzzwa') return `Hello, ${name}! Learn React`;
    return `Welcome, ${name}! Learn React`;
  };
  
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
          {getGreetingMessage('Zero')}
        </a>
      </header>
      <input type="checkbox" name="agreement" id="agreement-el" />
      <label htmlFor="agreement-el">I agree</label>
    </div>
  );
}

export default App;
