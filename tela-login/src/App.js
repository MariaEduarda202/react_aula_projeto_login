import logo from './logo.svg';
import './App.css';
import Login from "./Login.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Login/>
        </p>
       
      </header>
    </div>
  );
}

export default App;
