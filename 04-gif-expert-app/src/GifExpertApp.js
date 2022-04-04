import React, { useState } from 'react'

export const GifExpertApp = () => {

    // const categories = [
    //     'One Punch',
    //     'Samuurai X',
    //     'Dragon Ball',
    // ];
    const [categories, setCategories] = useState(
        [
            'One Punch',
            'Samuurai X',
            'Dragon Ball',
        ]
    );

    const handleAdd = () => {
        setCategories( [...categories, 'Mr. Muelas'] );
    }

    return <>
     
      <h2>
        GifExpertApp
      </h2>
      <hr/>
    <button onClick={handleAdd}>
        Add
    </button>
      <ol>
        {
            categories.map(category => {
                return <li key={category}>
                    { category }
                </li>
            })
        }
      </ol>
    </>
};