import { retornaArreglo } from "../../base/07-deses-arr";


describe('Pruebas 07 Desestructuracion de arreglos', () => {
    test('Retorna arrego deberia retornar [Letras, Numeros]', () => {
       
        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');


    });
})
