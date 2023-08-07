import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from '../../src/helpers/fileUpload';


cloudinary.config({
    cloud_name: 'dg16ekdw1',
    api_key: '781116182128715',
    api_secret: '9x59HrWOy_b4iTsgZR6bW9F8La4',
    secure: true
});

describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async() => {
        
        const imageUrl = 'https://images.unsplash.com/photo-1600337752115-de2c09d6704f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80';
        const res = await fetch(imageUrl);
        const blob = await res.blob()
        const file = new File([blob],'foto.jpg');
    
        const url = await fileUpload(file);
        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg','');

        await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
        });
    })

    test('debe de retonar null', async() => {
        const file = new File([],'foto.jpg');
        const url = await fileUpload(file)
        expect( url ).toBe(null)
    })
    
})
