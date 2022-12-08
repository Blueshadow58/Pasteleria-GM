import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    loading: false,
    hasErrors: false,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state,action) => {
            state.list = action.payload;
            state.loading = true;
        }
    }
})

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;