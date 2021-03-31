import logo from './sun.png';
import './App.css';
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo"></img>
      <Header />
    </div>
  );
}

export default App;
