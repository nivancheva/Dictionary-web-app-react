import './InputWord.css';
import SearchIcon from '../assets/images/icon-search.svg';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    searchWord: yup.string().required('Whoops, can’t be empty…'),
}).required();

export default function InputWord({onSubmit}) {
    const { register,handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function manageSubmit(data) {
        onSubmit(data.searchWord);
    }

    return (
        <form onSubmit={handleSubmit(manageSubmit)} className='input'>
            <input 
                {...register("searchWord")}
                className={`input_word${errors.searchWord?.message ? " inputIfError" : ""}`}
                placeholder="Search for any word..."
            />
            <button>
                <img className='search-icon' src={SearchIcon}/>
            </button>
            {errors.searchWord?.message && <p className='errors'>{errors.searchWord?.message}</p>}
        </form>
    )
}