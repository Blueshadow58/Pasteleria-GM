import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    total: 0,
    totalProducts: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state,action) => {
            state.list = action.payload;
        },
        setCantProducts: (state,action) => {
            state.totalProducts = action.payload;
        }       
    }
})

export const { setCantProducts,setCart } = cartSlice.actions;
export default cartSlice.reducer;
