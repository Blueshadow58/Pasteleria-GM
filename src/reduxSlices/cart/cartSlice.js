import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total: 0,
    totalItems: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state,action) => {
            state.token = action.payload;
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
