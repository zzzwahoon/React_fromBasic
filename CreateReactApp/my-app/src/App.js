import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {
  const info = {
    firstName: 'Jwahoon',
    lastName: 'Kim',
    withImg: true,
  }
  return (
    <div className="App">
      <Header title={'Learn React A'} />
      <Welcome {...info}/>
    </div>
  );
}

export default App;
