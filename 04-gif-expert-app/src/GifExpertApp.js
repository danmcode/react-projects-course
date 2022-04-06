import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    // const categories = [
    //     'One Punch',
    //     'Samuurai X',
    //     'Dragon Ball',
    // ];
    const [categories, setCategories] = useState(
        [
            'One Punch',
        ]
    );

    // const handleAdd = () => {
    //     setCategories( [...categories, 'Mr. Muelas'] );
    // }

    return <>
  
      <h2>
        GifExpertApp
      </h2>

        <AddCategory setCategories = { setCategories }/>

      <hr/>

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