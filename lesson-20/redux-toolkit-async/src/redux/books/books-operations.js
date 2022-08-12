import {createAsyncThunk} from "@reduxjs/toolkit";

import api from "../../shared/services/books";
// "books/add/pending"
// "books/add/fulfilled"
// "books/add/rejected"
export const addBook = createAsyncThunk("books/add", async (credentials, {rejectWithValue}) => {
    try {
        const {data} = await api.fetchAddBook(credentials);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export default {
    addBook
}

// export const addBook = data => {
//     const func = async dispatch => {
//         try {
//             dispatch(actions.addBookRequest());
//             const {data: result} = await api.fetchAddBook(data);
//             dispatch(actions.addBookSuccess(result));
//         } catch (error) {
//             dispatch(actions.addBookError(error));
//         }
//     };

//     return func;
// }


