import './InputWord.css';
import SearchIcon from '../assets/images/icon-search.svg';
import { useState } from 'react';

export default function InputWord({onSubmit}) {
    const [word, setWord] = useState('');

    function getWord(e) {
        setWord(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(word);
    }

    return (
        <form onSubmit={handleSubmit} className='input'>
            <input 
                className='input_word'
                type='text'
                placeholder="Search for any word..."
                value={word}
                onChange={getWord}
            />
            <button>
                <img className='search-icon' src={SearchIcon}/>
            </button>
        </form>
    )
}