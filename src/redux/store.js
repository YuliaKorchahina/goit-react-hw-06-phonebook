import { configureStore } from '@reduxjs/toolkit';
import {contactsReducer} from './contactsBook/contacts/contacts-slice'
import { filtersReducer } from './contactsBook/filter/filter-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer
  },
});
