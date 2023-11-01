import ButtonPlay from '../components/ButtonPlay';
import './WordMeaningSection.css';
import iconNewWindow from '../assets/images/icon-new-window.svg';

export default function WordMeaningSection({word}) {
    return (
        <div>
            {word && (
                <div className='word-wrapper'>
                    <div className='word flex'>
                        <div>
                            <p className='input-word'>{word.word}</p>
                            <p className='input-word_pronunciation'>{word.phonetics[1].text}</p>
                        </div>
                        <ButtonPlay audioUrl={word.phonetics[1].audio} />
                    </div>

                    <div className='word-wrapper'>
                        {word.meanings.map((wordMeaning, index) => {
                            return (
                                <div key={index}>
                                    <p className='part-of-speach'>{wordMeaning.partOfSpeech}</p>
                                    <h3 className='meaning-heading'>Meaning</h3>
                                    <ul className='meanings-list'>
                                        {(wordMeaning.definitions).map((meaning, idx) => {
                                            return (
                                                <li key={idx}>{meaning.definition}</li>
                                            )
                                        })}
                                    </ul>
                                    {wordMeaning.synonyms.length > 0 && (

                                        <div className='flex'>
                                            <h3 className='meaning-heading'>Synonyms</h3>
                                            {wordMeaning.synonyms.map((synonyms, idx) => {
                                                return (
                                                    <p key={idx} className='flex synonyms'>{synonyms}</p>
                                                )
                                            })}
                                        </div>
                                    )}

                                    {wordMeaning.antonyms.length > 0 && (
                                        <div className='flex'>
                                            <h3 className='meaning-heading'>Antonyms </h3>
                                            {wordMeaning.antonyms.map((antonyms, idx) => {
                                                return (
                                                    <p key={idx} className='flex synonyms'>{antonyms}</p>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>

                    <div className='flex word_source'>
                        <p>Source</p>
                        <div className='flex'>
                            <a href={word.phonetics[1].sourceUrl}>{word.phonetics[1].sourceUrl}</a>
                            <img className='icon_newwindow' src={iconNewWindow}/>
                        </div>
                    </div>

                </div>
            )}
            
        </div>
    )
}