import React from 'react';
//impt
import PropTypes from 'prop-types'; //Manejo de properties


export const GifGridItem = ( { id, title, url } ) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
        <img src={ url } alt={ title }/>
        <p> { title } </p>
    </div>
  );
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}


/**
 * Configuracion de tests
 * 1. Enzyme
 * 2. Enzyme to Json
 * 3. Debe mostrar el componente correctamente
 * 4. Implementando protypes.
 *  * shallow
 *  * wrapper
 *  * wrapper .toMatchSnapshot
 */