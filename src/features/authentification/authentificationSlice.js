import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: false,
    token: null,
}

export const authentificationSlice = createSlice({
    name: 'authentification',
    initialState,
    reducers: {
        changeToLogged: (state) => {
            state.user = !initialState.user;
        },
        setToken: (state,action) => {
            state.token = action.payload;
        }
    }
})

export const { changeToLogged,setToken } = authentificationSlice.actions;

export default authentificationSlice.reducer;