import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "./axiosConfig";


const getCart = createAsyncThunk('cart/getCart', async(_, {rejectWithValue})=>{
    try{
        const res = await api.get(`/cart`);
        return res.data;
    }catch(err){
        return rejectWithValue(err.response?.data ||'Network Error')
    }
})

const postCart = createAsyncThunk('cart/addToCart', async({productId}, {rejectWithValue})=>{
    try{
        const res = await api.post(`/cart-items`, {productId});
        return res.data;
    }catch(err){
        return rejectWithValue(err.response?.data ||'Network Error')
    }
})

const postDeleteCart = createAsyncThunk('cart/DeleteFromCart', async({productId}, {rejectWithValue})=>{
    try{
        const res = await api.post(`/cart-delete-items`, {productId});
        return res.data;
    }catch(err){
        return rejectWithValue(err.response?.data ||'Network Error')
    }
})

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        products: [],
        count: 0,
        loading: false,
        error: null,
    },
    reducers:{
        clearCart: (state) => {
            state.products = [];      
            state.count = 0; 
        }
        // addToCart : (state, action)=>{
        //     state.products.push(action.payload);
        //     state.count = state.products.length;
        // },
        // removeFromCart:(state, action)=>{
        //     state.products = state.products.filter(item=>item.id !== action.payload);
        //     state.count = state.products.length;
        // }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getCart.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
            state.count = action.payload.count;
        })
        .addCase(getCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
        .addCase(postCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(postCart.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
            state.count = action.payload.count;
        })
        .addCase(postCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
        .addCase(postDeleteCart.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(postDeleteCart.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.updatedCart;
            state.count = action.payload.count;
        })
        .addCase(postDeleteCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
    }
});

export const cartActions = cartSlice.actions;

export { getCart, postCart, postDeleteCart };

export default cartSlice;