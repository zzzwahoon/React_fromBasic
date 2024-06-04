import './App.css';
// import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Calculator from './components/Calculator';
import Clock from './components/classClock';
import FunctionClock from './components/FunctionClock';
import Banner from './components/Banner';
import Toggle from './components/toggle';

function App() {
  return (
    <div className="App">
      <Counter2 />
      <br />
      <hr />
      <br />
      <Calculator />
      <br />
      <hr />
      <br />
      <Clock />
      <br />
      <hr />
      <br />
      <FunctionClock />
      <br />
      <hr />
      <br />
      <Banner />
      <br />
      <hr />
      <br />
      <Toggle />
    </div>
  );
}

export default App;
