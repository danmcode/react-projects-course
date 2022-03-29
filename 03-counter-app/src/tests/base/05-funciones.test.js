import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas en 05-funciones', () => {
    test('get User deberia retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
    
        const user = getUser();
    
        expect(user).toEqual(userTest);
    });

    test('get usuario activo deberia retornar una funcion', () => { 
        const nameTest = 'Daniel';
        
        const activeUserTest = {
            uid: 'ABC567',
            username: nameTest
        };

        const activeUser = getUsuarioActivo(nameTest);

        expect(activeUser).toEqual(activeUserTest);
    });
});
