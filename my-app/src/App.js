import logo from './sun.png';
import './App.css';
import './Header.css';
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo"></img>
      <Header className="Position"/>
    </div>
  );
}

export default App;
