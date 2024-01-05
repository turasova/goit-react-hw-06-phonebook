import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const contactInitialState = {
    defoltContacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactInitialState,
    reducers: {
 deleteContact: (state, action) => {
  state.contacts = state.contacts.filter(el => el.id !== action.payload)
 },
 addContact: (state, action) => {
  state.contacts = [...state.contacts, action.payload]
 },
},
})

export const getContactValue = state => state.contacts.defoltContacts;
export const { deleteContact, addContact } = contactsSlice.actions;

const persistConfig = {
    key: 'contacts',
    storage,
}

export const contactsPersistReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
)