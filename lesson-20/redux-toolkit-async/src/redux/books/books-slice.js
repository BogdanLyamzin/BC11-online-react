import {createSlice} from "@reduxjs/toolkit";

import { addBook } from "./books-operations";

const initialState = {
    items: [],
    loading: false,
    error: null
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    extraReducers: {
        [addBook.pending]: (state, _)=> {
            state.loading = true;
            state.error = null;
        },
        [addBook.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.items.push(payload);
        },
        [addBook.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        }
    }
});

export const {actions} = booksSlice;

export default booksSlice.reducer;

