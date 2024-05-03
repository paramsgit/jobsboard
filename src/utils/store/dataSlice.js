import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        cardsArray: [], 
           
    },
    reducers: {
        UpdateCardsArray: (state,action) => {
            state.cardsArray = [...state.cardsArray, ...action.payload];;
        },
        
       
    },
});

export const {  UpdateCardsArray, } = dataSlice.actions;
export default dataSlice.reducer;