import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    loading: true,
    hasErrors: false,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state,action) => {
            state.list = action.payload;
            state.loading = !state.loading ;
        }
    }
})

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;