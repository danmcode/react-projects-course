const nombre = 'Daniel';
const apellidos = 'Muelas';

const nombreCompleto = nombre + ' ' + apellidos;

console.log(nombreCompleto);

const nombreCompletoAgil = `${nombre} ${apellidos}`;

console.log(nombreCompleto);

function saludar(nombre){
    return console.log('Hola' + ' ' + nombre);
}

console.log(saludar(nombreCompletoAgil));