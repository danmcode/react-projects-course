//Desestructuracion de objetos
//Asignacion Desestructurante
const persona = {
    nombre: 'Tony',
    edad: '45',
    clave: 'IronMan',
};

const {edad, clave:vengador, nombre} = persona;

console.log(`${edad} ${vengador} ${nombre}`)

//Desestructuracion desde el argumento
//y asignacion de valores por defecto
const context = ({clave, nombre, edad, rango='principal'})=>{
    console.log(nombre,edad,rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.131234,
            lng: -123.21342
        }
    }
}

// Extraer onjetos anidados y colocarlos directamente
// en el const
const {nombreClave, anios, latlng:{lat, lng}} = context(persona);
console.log(nombre, anios);
console.log(lat, lng);