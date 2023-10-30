import './App.css';
import Navigation from './components/Navigation';
import InputWord from './components/InputWord';
import WordMeaningSection from './components/WordMeaningSection';

function App() {

  return (
    <div className='container'>

      <Navigation />

      <InputWord />

      <WordMeaningSection />
   
    </div>
  )
}

export default App
