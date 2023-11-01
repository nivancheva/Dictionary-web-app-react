import './App.css';
import Navigation from './components/Navigation';
import InputWord from './components/InputWord';
import WordMeaningSection from './components/WordMeaningSection';
import { useState } from 'react';

function App() {
  const [getWord, setGetword] = useState();

  async function searchWordMeaning(word) {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (response.ok) {
        const wordMeaning = await response.json();
        setGetword(wordMeaning[0]);    
      }

      } catch(error) {
        setGetword(null);
      }       
  }

  function handleSubmit(word) {
    searchWordMeaning(word);
  }


  return (
    <div className='container'>
      
      <Navigation />

      <InputWord onSubmit={handleSubmit} />

      <WordMeaningSection word={getWord} />
   
    </div>
  )
}

export default App
