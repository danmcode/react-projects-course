
//Agrupar las pruebas
describe('Pruebas en el archivo demo.test.js', ()=> {

    test('Deben de ser iguales', ()=>{
        //1. Inicializand
        const message = "Hola Mundo!";
    
        //2. estimulo
        const message2 = `Hola Mundo!`;
    
        //3. Observar el comportamiento
        expect(message).toBe(message2);
    
    });
    
});
