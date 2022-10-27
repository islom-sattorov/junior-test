import { createSlice } from "@reduxjs/toolkit";

interface Init{
    loading: boolean;
    data: any[];
    error: string
}

const initialState: Init = {
    loading: false,
    data: [],
    error: '',
}

// export const getData = createAsyncThunk('menus/getMenu', async () =>{
//     try{

//     }

//     catch(err){
//         console.error(err);
//     }
// })


export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers:{

    }
})


export const selectAllData = (state: any) => state.daily
export const dataReducer = dataSlice.reducer