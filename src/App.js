import logo from './logo.svg';
import './App.css';

import teclado from "./components/teclado.js"
function App() {
  return (
    <div className="App">
    {teclado()}
    </div>
  );
}

export default App;
