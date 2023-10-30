import ButtonPlay from '../components/ButtonPlay';
import './WordMeaningSection.css';

export default function WordMeaningSection() {
    return (
        <div>
            <div className='word flex'>
                <div>
                    <p className='input-word'>keybord</p>
                    <p className='input-word_pronunciation'>/ˈkiːbɔːd/</p>
                </div>
                <ButtonPlay />
            </div>
            
        </div>
    )
}