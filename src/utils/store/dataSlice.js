import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        cardsArray: [], 
           
    },
    reducers: {
        UpdateCardsArray: (state, action) => {
            // Iterate over each item in the payload
            action.payload.forEach(item => {
                // Check if the item is already present in cardsArray
                const index = state.cardsArray.findIndex(card => card.jdUid === item.jdUid);
                // If not present, add it to cardsArray
                if (index === -1) {
                    state.cardsArray.push(item);
                }
            });
        },   
    },
});

export const {  UpdateCardsArray, } = dataSlice.actions;
export default dataSlice.reducer;