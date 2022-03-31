import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => { 
    test('getHeroeByIdAsync debe devolver un Heroe async', (done) => { 
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
     });

     test('Debe retornar error si el Heroe no existe', (done) => { 
         const id = 10;
         getHeroeByIdAsync(10)
            .catch(err => {
                expect(err).toBe('No se pudo encontrar el héroe');
                done();
            });
      });
 });