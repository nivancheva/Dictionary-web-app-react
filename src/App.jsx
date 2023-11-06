import './App.css';
import Navigation from './components/Navigation';
import InputWord from './components/InputWord';
import WordMeaningSection from './components/WordMeaningSection';
import NoDefinition from './components/NoDefinition';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [getWord, setGetword] = useState();
  const [font, setFont] = useState('sans-serif');
  const [noDefinition, setNoDefinition] = useState(false);

  function changeFont(newFont) {
    setFont(newFont);
  }

  async function searchWordMeaning(word) {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (response.ok) {
        const wordMeaning = await response.json();
        setGetword(wordMeaning[0]); 
        setNoDefinition(false);
      }
      else {
        setGetword(null);
        setNoDefinition(true);
      }

    } catch {
      setGetword(null);
      setNoDefinition(true);
    }       
  }

  function handleSubmit(word) {
    searchWordMeaning(word);
  }


  return (
    <div className={`container font-${font}`}>
      
      <Navigation font={font} changeFont={changeFont}/>

      <InputWord onSubmit={handleSubmit} />

      {noDefinition ? <NoDefinition /> : <WordMeaningSection word={getWord} />}

      <Footer />
   
    </div>
  )
}

export default App
