export const initialState = { 
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
}

export const savingState = { 
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
}

export const stateWithNotes = { 
    isSaving: false,
    messageSaved: '',
    notes: [{
        title: 'Hola Mundo',
        body: 'Hola Mundo 2',
        id: '123ABC',
        imageUrls: [],
        date: 22321321
    }],
    active: null
}
