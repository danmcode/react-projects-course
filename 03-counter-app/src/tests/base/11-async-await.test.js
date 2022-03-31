import { getImagen } from "../../base/11-async-await";

describe('Pruebas con async y await', () => { 

    test('should return image url', async () => {
        
        const url = await getImagen();
        console.log(url);
        expect(url.includes('https://')).toBe(true);
     
    });

 });