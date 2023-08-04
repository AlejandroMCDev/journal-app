import { fileUpload } from "../../src/helpers/fileUpload"

describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async() => {
        
        const imageUrl = 'https://images.unsplash.com/photo-1600337752115-de2c09d6704f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80';
        const res = await fetch(imageUrl);
        console.log(res)
        const blob = await res.blob()
        console.log(blob)
        const file = new File([blob],'foto.jpg');
        console.log(file)

        const url = await fileUpload(file);
        expect( typeof url).toBe('string');

        
    })
    
})
