import ButtonPlay from '../components/ButtonPlay';
import './WordMeaningSection.css';

export default function WordMeaningSection({word}) {
    return (
        <div>
            {word && (
                <div className='word flex'>
                <div>
                    <p className='input-word'>{word.word}</p>
                    <p className='input-word_pronunciation'>{word.phonetics[1].text}</p>
                </div>
                <ButtonPlay audioUrl={word.phonetics[1].audio} />

                </div>
            )}
            
        </div>
    )
}