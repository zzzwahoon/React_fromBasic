import './App.css';
// import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Calculator from './components/Calculator';
import Clock from './components/classClock';

function App() {
  return (
    <div className="App">
      <Counter2 />
      <br /><hr /><br />
      <Calculator />
      <br /><hr /><br />
      <Clock />
    </div>
  )
}

export default App;
