import './InputWord.css';
import SearchIcon from '../assets/images/icon-search.svg';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    word: yup.string().required('Whoops, can’t be empty…'),
  }).required();

export default function InputWord({onSubmit}) {
    const { handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const [word, setWord] = useState('');

    function getWord(e) {
        setWord(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='input'>
            <input 
                className={`input_word${errors.word?.message ? " inputIfError" : ""}`}
                type='text'
                placeholder="Search for any word..."
                value={word}
                onChange={getWord}
            />
            <button>
                <img className='search-icon' src={SearchIcon}/>
            </button>
            {errors.word?.message && <p className='errors'>{errors.word?.message}</p>}
        </form>
    )
}