import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const boxStyleSlice = createSlice({
    name: "boxStyle",
    initialState,
    reducers:{}
})

export const selectAllBoxStyles = ((state: any) => state.boxStyle)
export const boxStyleReducer = boxStyleSlice.reducer