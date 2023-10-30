import './App.css';
import ButtonPlay from './components/ButtonPlay';
import InputWord from './components/InputWord';
import Navigation from './components/Navigation';

function App() {

  return (
    <div className='container'>
      <Navigation />

      <InputWord />
      
      <ButtonPlay />

      
    </div>
  )
}

export default App
