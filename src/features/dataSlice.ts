// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getData = createAsyncThunk('data/getData', async () =>{
//     try{
//         const url = 'http://localhost:3000/posts';
//         const request = await fetch(url)
//         const requestJson = await request.json();
//         const data = await requestJson;
//         console.log(data)
//         return data
//     }

//     catch(err){
//         console.error(err);
//     }
// })

// interface Init{
//     loading: boolean;
//     data: [];
//     error: string
// }

// const initialState: Init = {
//     loading: false,
//     data: [],
//     error: '',
//  } 




// export const dataSlice = createSlice({
//     name: "data",
//     initialState,
//     reducers:{
        
//     },
//     extraReducers:{
//         [getData.pending]: (state, action) =>{
//             state.loading = true
//         },
//         [getData.fulfilled]: (state, action) =>{
//             state.loading = false
//             state.data = action.payload
//         },
//     }
//     // extraReducers:{
//     //     [getMenu.pending]: (state, action) => {
//     //         state.loading = true
//     //     },
//     //     [getMenu.fulfilled]: (state, action) => {
//     //         state.loading = false
//     //         state.menus = action.payload
//     //     },
//     //     [getMenu.rejected]: (state, action) => {
//     //         state.loading = false
//     //     },
//     // },
//     // }
// })


// export const selectAllData = (state: any) => state.daily
// export const dataReducer = dataSlice.reducer

//  // extraReducers:{
//     //     [getData.pending]: (state, action) =>{
//     //         state.loading = true
//     //     },

//     // }

export { };
