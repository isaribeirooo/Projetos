import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import DigaMeuNome from './DigaMeuNome';

function App() {
  return (
    <div className="App">
      <h1>MEU PRIMEIRO REACT</h1>
      <Frase /> 
      <HelloWorld />
      <Frase /> 
      <DigaMeuNome nome="Ana e Isa"/>
      <p>Outro paragrafo</p>
    </div>
  );
}

export default App;
