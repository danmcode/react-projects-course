//Desestecturacion de arreglos.
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , ,p3] = personajes;
console.log(p3);

const retornaArreglo = ()=>{
    return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
const putState = (valor) => {
    return [valor, ()=>{ console.log('Hola Mundo') }];
}

const [nombre, putNombre] =  putState('Goku');

console.log(nombre);
putNombre();