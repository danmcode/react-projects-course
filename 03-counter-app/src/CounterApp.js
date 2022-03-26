import React, { useState } from 'react'
import PropTypes from 'prop-types' //Manejo de properties

const CounterApp = ({
    value,
}) => {
    

    const [counter, setCounter] = useState(value);

    const handleAdd = (e) => {
        setCounter(counter + 1 );
    };

    const handleSubtract = ()=>{
        setCounter(counter - 1);
    };

    const handleReset = ()=>{
        setCounter(value);
    };

    return(
        <>
            <h1>CounterApp</h1>
            <p> {counter} </p>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleReset }> Reset </button>
            <button onClick={ handleSubtract }> -1 </button>
        </>
    );

};

/**
 * Definir el tipo de parametros que se necesitan
 * Asi como definir si el properties es requerido o no
 */
CounterApp.propTypes = {
    value: PropTypes.number
};

export default CounterApp;