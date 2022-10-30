import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchValue: ''
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers:{
    }
})

export const searchReducer = searchSlice.reducer



