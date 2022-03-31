import React from 'react';
import PropTypes from 'prop-types' //Obigar parametros


export const PrimeraApp = ({ saludo, subtitulo }) => {

    //const saludar = "Hola Mundo";

    return (
        <>
            <h1> { saludo } </h1>
            {/* <h1>  <pre> {JSON.stringify( { nombre: 'Daniel'}, null, 3 )} </pre> </h1> */}
            <p> {subtitulo} </p>
        </>
    );
};

/**
 * Definir el tipo de parametros que se necesitan
 * Asi como definir si el properties es requerido o no
 */

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: "Subtitulo por defecto "
}

export default PrimeraApp;