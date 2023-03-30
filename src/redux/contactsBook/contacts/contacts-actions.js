import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/add", (data)=> {
    console.log(data);
    return {
        payload: {
            ...data,
            id: nanoid(),
        }
    }
});