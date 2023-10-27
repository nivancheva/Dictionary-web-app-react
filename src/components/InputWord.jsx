import './InputWord.css';
import SearchIcon from '../assets/images/icon-search.svg';

export default function InputWord() {
    return (
        <div className='input'>
            <input className='input_word' type='text' placeholder="Search for any word..."/>
            <img className='search-icon' src={SearchIcon}/>
        </div>
    )
}