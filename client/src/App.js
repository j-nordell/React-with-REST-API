import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>

    </div>
  );
}

fetch('http://localhost:5000/api/courses')
    .then(response => response.json())
    .then(data => console.log(data));

export default App;
