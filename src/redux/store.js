import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts-reduser';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
