import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./axiosConfig";

const getFavItems = createAsyncThunk('favourite/getFavItems', async(_, {rejectWithValue})=>{
    try{
        const res = await api.get(`/favourite`);
        return res.data;
    }catch(err){
        return rejectWithValue(err.response?.data ||'Network Error')
    }
})

const postFavItem = createAsyncThunk('favourite/addToFav', async({productId}, {rejectWithValue})=>{
    try{
        const res = await api.post(`/favourite-item`, {productId});
        return res.data;
    }catch(err){
        return rejectWithValue(err.response?.data ||'Network Error')
    }
})

const postDeleteFavItem = createAsyncThunk('favourite/DeleteFromFav', async({productId}, {rejectWithValue})=>{
    try{
        const res = await api.post(`/favourite-delete-item`, {productId});
        return res.data;
    }catch(err){
        return rejectWithValue(err.response?.data ||'Network Error')
    }
})

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState : {
        products: [],
        count: 0,
        loading: false,
        error: null,
    },
    reducers : {
        clearFav: (state) => {
            state.products = [];      
            state.count = 0;  
        }
        // addToFav : (state, action)=>{
        //     state.push(action.payload);
        // },
        // removeFromFav:(state, action)=>{
        //     return state.filter(item=>item.id !== action.payload);
        // }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getFavItems.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getFavItems.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
            state.count = action.payload.count;
        })
        .addCase(getFavItems.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
        .addCase(postFavItem.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(postFavItem.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
            state.count = action.payload.count;
        })
        .addCase(postFavItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
        .addCase(postDeleteFavItem.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(postDeleteFavItem.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.updatedFavourites;
            state.count = action.payload.count;
        })
        .addCase(postDeleteFavItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
    }
})

export {getFavItems, postFavItem, postDeleteFavItem}

export const favouriteAction = favouriteSlice.actions; 

export default favouriteSlice;