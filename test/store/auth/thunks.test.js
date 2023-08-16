
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth"
import { checkingAuthentication, startCreatingUserWithEmailPassword, startGoogleSingIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunk"
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers')

describe('Pruebas en AuthThunks', () => {
    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe de invocar el checkingCredentials', async() => {
        await checkingAuthentication()(dispatch)
        
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
       
    });

    test('startGoogleSignIn debe de llamar checkingCredentials y login - Exito', async() => {
        const loginData = { ok:true, ...demoUser };
        await signInWithGoogle.mockResolvedValue( loginData );
        await startGoogleSingIn()( dispatch );
        
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials());
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
    });
    
    test('startGoogleSignIn debe de llamar checkingCredentials y logout - Error', async() => {
        const loginData = { ok:false, errorMessage: 'Un error inesperado' };
        await signInWithGoogle.mockResolvedValue( loginData );
        await startGoogleSingIn()( dispatch );
        
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials());
        expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) );
    });

    test('startLoginWithEmailAndPassword debe de llamar checking y login - Exito', async() => {
        const loginData = { ok:true, ...demoUser };
        const loginParamas = {...demoUser}
        const formData = { email:demoUser.email, password: '123456' }
        await loginWithEmailPassword.mockResolvedValue( loginData );
        await startLoginWithEmailPassword( formData )( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginParamas ) );
    });

    test('startLoginWithEmailAndPassword debe de llamar checking y logout - Error', async() => {
        const loginData = { ok:false, errorMessage: 'Algo salio mal' };
        const formData = { email:demoUser.email, password: '123456' }
        const error = { errorMessage: 'Algo salio mal' };
        await loginWithEmailPassword.mockResolvedValue( loginData );
        await startLoginWithEmailPassword( formData )( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( error ) );

    })

    test('startCreatingUserWithEmailPassword debe de llamar checking y login - Exito', async() => {
        const loginData = { ok:true, ...demoUser };
        const loginParamas = {...demoUser}
        const formData = { email:demoUser.email, password: '123456',displayName: demoUser.displayName }
        await registerUserWithEmailPassword.mockResolvedValue( loginData );
        await startCreatingUserWithEmailPassword( formData )( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginParamas ) );

    });

    test('startCreatingUserWithEmailPassword debe de llamar checking y logout - Error', async() => {
        const loginData = { ok:false, errorMessage:'Algo salio mal' };
        const error = { errorMessage: 'Algo salio mal' }; 
        const formData = { email:demoUser.email, password: '123456',displayName: demoUser.displayName }
        await registerUserWithEmailPassword.mockResolvedValue( loginData );
        await startCreatingUserWithEmailPassword( formData )( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( error ) );

    });

    test('starLogout debe de llamar a logoutFirebase, clearNotes y logout', async() => {
        await startLogout()(dispatch);

        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
        expect( dispatch ).toHaveBeenCalledWith( logout() );
    });
    
    
    
})
