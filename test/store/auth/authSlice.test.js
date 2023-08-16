import { AuthSlice ,checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";


describe('Pruebas en el authSlice', () => {
    test('debe de regresar el estado inicial y llamarse "auth"', () => {
        const state = AuthSlice.reducer( initialState, {})
        
        expect(AuthSlice.name).toBe('auth');
        expect( state ).toEqual(initialState);
    });

    test('Debe de realizar la autenticacion', () => {
        const state = AuthSlice.reducer( initialState, login( demoUser ) );
        expect(state).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null
        });
    })
    
    test('Debe de realizar el logout sin argumentos ', () => {
        const state = AuthSlice.reducer(authenticatedState, logout())
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        });
    })

    test('Debe de realizar el logout con argumentos ', () => {
        const state = AuthSlice.reducer(authenticatedState, logout({errorMessage: 'Vuelva pronto'}))
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: 'Vuelva pronto'
        });
    })

    test('debe de cambiar el estado a checking', () => {
        const state = AuthSlice.reducer(authenticatedState, checkingCredentials());
        expect(state.status).toBe('checking')
    })
    
    
    
})
