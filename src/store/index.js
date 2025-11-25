import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import favouriteSlice from "./favourite";
import filterSlice from "./filter";
import shopSlice from "./shop";
import authSlice from "./auth";
import adminSlice from "./admin";

const moboStore = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        favourite : favouriteSlice.reducer,
        filters : filterSlice.reducer,
        shop : shopSlice.reducer,
        auth : authSlice.reducer,
        admin: adminSlice.reducer
    }
})

export default moboStore;