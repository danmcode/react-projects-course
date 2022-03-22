const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 183131,
        lat: 14.123,
        lng: 34.123,
    }
}

console.log( persona );

//Clonacion de un objeto para crear uno nuevo
const persona2 = { ...persona};
persona2.nombre = 'Peter';

console.log(persona2);