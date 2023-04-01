import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const dataInitialStore = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: dataInitialStore,
  reducers: {
    addContact: {
      reducer(store, action) {
        store.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(store, action) {
      const index = store.findIndex(contact => contact.id === action.payload);
      store.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
