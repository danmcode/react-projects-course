//Funciones JS
// function saludar(nombre){
//     return `Hola, ${ nombre }`
// }

const saludar = function(nombre){
    return `Hola, ${nombre}`
}


const saludar2 = (nombre) => `Hola, ${nombre}`;

const saludar3 = () => `Hola, Krilin`;
// saludar = 30;

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3());

const getUser = ()=>({
    uid: 'ABC123',
    username: 'danmcode'
});

const user = getUser();
console.log(user);

//Tarea
//1. Transformar a una funcion de flecha
//2. Tiene que ser un objeto implicito
//3. Pruebas
const getUsuarioActivo = (nombre) => 
    ({
        uid: 'ABC567',
        username: nombre,
    });


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);