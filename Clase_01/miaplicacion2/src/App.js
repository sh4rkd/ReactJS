import logo from './logo.svg';
import './App.css';

function App() {
  let condicion = true
  let resultado = null
  //condition ? true:false
  console.log(`El resultado es: ${condicion?"Verdadero":"Falso"}`)

  console.log(resultado)

  return (
    <div className="App">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
