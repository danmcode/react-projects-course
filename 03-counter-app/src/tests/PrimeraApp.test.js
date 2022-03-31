import { render } from "@testing-library/react";
import React from "react";
import PrimeraApp from "../PrimeraApp";
import '@testing-library/jest-dom/extend-expect';

describe('Pruebas en <PrimeraApp/>', () => { 
    
    test('Debe mostrar el mensaje, Hola Soy Goku', () => { 
        const saludo = "Hola Soy Goku";

        const { getByText } = render(<PrimeraApp saludo={ saludo }/>);

        expect( getByText(saludo) ).toBeInTheDocument();
     });



 });