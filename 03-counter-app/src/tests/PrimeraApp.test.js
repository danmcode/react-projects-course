import { shallow } from 'enzyme';
import React from "react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp/>', () => { 
    
    // test('Debe mostrar el mensaje, Hola Soy Goku', () => { 
    //     const saludo = "Hola Soy Goku";

    //     const { getByText } = render(<PrimeraApp saludo={ saludo }/>);

    //     expect( getByText(saludo) ).toBeInTheDocument();
    //  });

    test('Debe mostrar el mensaje, Hola Soy Goku', () => {
        const saludo = "Hola, Soy Goku";
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar un subtitulo enviado por Props', () => {
        const saludo = "Hola, Soy Goku";
        const subtitulo = "Soy un subtitulo";
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subtitulo }
            />
        );

        const textParrafo = wrapper.find('p').text();
        expect( textParrafo ).toBe(subtitulo);
        
    });
 });