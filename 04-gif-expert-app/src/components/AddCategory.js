import React, { useState } from 'react'
import { setCategories } from '../GifExpertApp';
//rafc
export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('Hola Mundo');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories( cats => [...cats, inputValue] );
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
            type = "text"
            value={ inputValue }
            onChange={ handleInputChange }
        />
    </form>
  )
}


