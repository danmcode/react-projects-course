import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.test.js', () => { 
    test('getSaludo debe retornar Hola daniel', () => { 
        const nombre = "Daniel";

        const saludo = getSaludo( nombre );

        expect(saludo).toBe(`Hola ${nombre}`);
        
    });

    //getSaludo debe retornar Hola Carlos! si no hay argumento nombre
    test('should Carlos', () => { 
        const saludo = getSaludo();
        expect(saludo).toBe(`Hola Carlos`);
     });
}
);