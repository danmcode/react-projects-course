import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => { 
    
    test('Debe retornar un heroe por ID', () => { 
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
     });

     test('Debe retornar undefined si el heroe no existe', () => { 
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
     });

     //Realizar las pruebas por OWNER
     test('Debe retornar un arreglo con los heroes de DC', () => { 
         const owner = "DC";
         const getOwner = getHeroesByOwner(owner);

         const heroesData = heroes.filter(h => h.owner === owner);

         console.log(heroesData);
         expect(getOwner).toEqual(heroesData);
      });

      //Realizar las pruebas con Owner
      test('Debe retornar un arreglo del mismo tamaño con los heroes de Marvel', () => {
            const owner = "Marvel";
            const getOwner = getHeroesByOwner(owner);

            const heroesData = heroes.filter(h => h.owner === owner);

            expect(getOwner.length).toBe(heroesData.length); 
        });

 })