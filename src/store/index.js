import { configureStore,combineReducers,applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authentificationReducer from "../reduxSlices/authentification/authentificationSlice";
import cartReducer from "../reduxSlices/cart/cartSlice";
import productsReducer from "../reduxSlices/products/productsSlice";

const rootReducer = combineReducers({
    authentification: authentificationReducer,
    cart: cartReducer,
    products: productsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});