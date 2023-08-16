import { addNewEmptyNote, journalSlice, setActiveNote, setNotes } from "../../../src/store/journal/journalSlice"
import { initialState, stateWithNotes } from "../../fixtures/journalFixtures"

describe('Pruebas en journalSlice', () => {
    test('debe de regresar el estado inicial y llamarse "journal"', () => {
        const state = journalSlice.reducer(initialState,{})

        expect(journalSlice.name).toBe('journal');
        expect(state).toEqual(initialState)
    });

    test('debe añadir una nueva nota', () => {
        const state = journalSlice.reducer(initialState, addNewEmptyNote({
            title: 'Hola',
            body: 'Mundo'
        }))
        expect(state).toEqual({
            isSaving: false,
            messageSaved: '',
            notes: [ { title: 'Hola', body: 'Mundo' } ],
            active: null
        })
    });

    test('debe activar la nueva nota', () => {
        const state = journalSlice.reducer(initialState, setActiveNote({
            title: 'Hola',
            body: 'Mundo',
            id: '123ABC',
            date: 123218321,
            imageUrls: []
        }));

        expect(state).toEqual({
            isSaving: false,
            messageSaved: '',
            notes: [],
            active: state.active
        })
    });

    test('debe setear una nota', () => {
        const state = journalSlice.reducer(stateWithNotes, setNotes({
            title: 'Hola',
            body: 'Mundo',
            id: '123ABC',
            date: 123218321,
            imageUrls: []
        }));

        expect(state.notes).toEqual({
            title: 'Hola',
            body: 'Mundo',
            id: '123ABC',
            date: 123218321,
            imageUrls: []
          })
    });
    
})
