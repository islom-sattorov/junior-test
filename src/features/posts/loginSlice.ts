import { createSlice } from "@reduxjs/toolkit";

interface Init{
    username: string;
    password: string
}

const initialState: Init = {
    username: "",
    password: "",
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        createLoginForm: (state, action) =>{
            state.username = action.payload.username;
            state.password = action.payload.password;
        }
    }
})

export const selectAllLogin = (state: Init) => state
export const loginReducer = loginSlice.reducer
export const { createLoginForm } = loginSlice.actions