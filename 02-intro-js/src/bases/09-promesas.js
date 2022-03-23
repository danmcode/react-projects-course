import { getHeroeById } from "./bases/08-export";
//Declaracion de una promesa

// const promesa = new Promise( (resolve, reject) =>{

//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     }, 2000);

// });

// promesa.then( (heroe)=>{
//     console.log(heroe);
// }).catch(
//     err => console.warn('No se encontro el heroe') 
// );

const getHeroeByIdAsync = (id) => {
    
    return new Promise((resolve, reject) =>{

        setTimeout(() => {
            const heroe = getHeroeById(id);
            
            heroe ? resolve(heroe) : reject('No se encontro el heroe');
        }, 2000);

    });
}

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn);


