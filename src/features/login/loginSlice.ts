import { createSlice } from "@reduxjs/toolkit";

interface Init{
    username: string
    password: string
    status: boolean
}

const initialState: Init = {
    username: "",
    password: "",
    status: false,
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        createLoginForm: (state, action) =>{
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        toggleStatus: (state,action) =>{
            state.status = action.payload
        }
    }
})

export const selectAllLogin = (state: any) => state.login
export const loginReducer = loginSlice.reducer
export const { createLoginForm, toggleStatus } = loginSlice.actions