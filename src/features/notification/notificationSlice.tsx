import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState: any[] = []

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers:{  
        addNotification: (state, action) =>{
            const {type, message} = action.payload;
            return [...state, {id: nanoid(), type: type, message: message}]
        },
        removeNotification: (state, action) =>{
            const id = action.payload;
            return state.filter(element => element.id !== id)
        }
    }
})

export const notificationReducer = notificationSlice.reducer
export const {addNotification, removeNotification} = notificationSlice.actions
export const selectAllNotifications = (state: any) => state.notification