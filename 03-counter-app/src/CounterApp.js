import React from 'react'
import PropTypes from 'prop-types' //Manejo de properties

const CounterApp = ({
    value,
}) => {

    const handleAdd = (e) => {
        console.log(e);
    }

    return(
        <>
            <h1>CounterApp</h1>
            <p> {value} </p>
            <button onClick={ handleAdd }> +1 </button>
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