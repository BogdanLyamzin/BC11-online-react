import {createSlice} from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const booksSlice = createSlice({
    name: "books",
    initialState: [],
    reducers: {
        addBook: {
            prepare: (data)=> {
                const newBook = {...data, id: nanoid()};
                return { payload: newBook }
            },
            reducer: (state, {payload}) => {
                state.push(payload);
            }
        },
        // addBook: (state, {payload})=> {
        //     const newBook = {...payload, id: nanoid()};
        //     state.push(newBook);
        // },
        removeBook: (state, {payload}) => {
            const updateBooks = state.filter(item => item.id !== payload);
            return updateBooks;
        }
    }
});

export const {addBook, removeBook} = booksSlice.actions;

export default booksSlice.reducer;

