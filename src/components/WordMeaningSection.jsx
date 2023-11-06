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
                            <p className='input-word_pronunciation'>{word.phonetics[0].text}</p>
                        </div>
                        <ButtonPlay audioUrl={word.phonetics[0].audio} />
                    </div>

                    <div className='word-wrapper'>
                        {word.meanings.map((wordMeaning, index) => {
                            return (
                                <div key={index}>
                                    <p className='part-of-speach'>{wordMeaning.partOfSpeech}</p>
                                    <p className='meaning-heading meaning'>Meaning</p>
                                    <ul className='meanings-list'>
                                        {(wordMeaning.definitions).map((meaning, idx) => {
                                            return (
                                                <li key={idx} className='definition'>{meaning.definition}</li>
                                            )
                                        })}
                                    </ul>
                                    {wordMeaning.synonyms.length > 0 && (

                                        <div className='flex synonyms-heading'>
                                            <p className='meaning-heading'>Synonyms</p>
                                            {wordMeaning.synonyms.map((synonyms, idx) => {
                                                return (
                                                    <p key={idx} className='flex synonyms'>{synonyms}</p>
                                                )
                                            })}
                                        </div>
                                    )}

                                    {wordMeaning.antonyms.length > 0 && (
                                        <div className='flex synonyms-heading'>
                                            <p className='meaning-heading'>Antonyms </p>
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
                        <p className='meaning-heading'>Source</p>
                        <div className='flex'>
                            <a href={word.phonetics[0].sourceUrl}>{word.phonetics[0].sourceUrl}</a>
                            <img className='icon_newwindow' src={iconNewWindow}/>
                        </div>
                    </div>

                </div>
            )}
            
        </div>
    )
}