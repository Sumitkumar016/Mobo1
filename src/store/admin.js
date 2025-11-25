import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from './axiosConfig';

const getProducts = createAsyncThunk('admin/getProduct', async(_,{rejectWithValue})=>{
    try{
        const res = await api.get(`/admin/products`);
        return res.data;
    }
    catch(err){
        return rejectWithValue(err.response?.data ||'Network Error');
    }
});
const getProductsById = createAsyncThunk('admin/getProductsById', async(id,{rejectWithValue})=>{
    try{
        const res = await api.get(`/admin/products/${id}`);
        return res.data.product;
    }catch(err){
        return rejectWithValue(err.response?.data ||'Network Error')
    }
})
const getEditProducts = createAsyncThunk('admin/getEditProducts', async(productId,{rejectWithValue})=>{
    try{
        const res = await api.get(`/admin/edit-product/${productId}`);
        return res.data.product;
    }catch(err){
        return rejectWithValue(err.response?.data ||'Network Error')
    }
})
const postAddProduct = createAsyncThunk('admin/postAddProduct', async({name, brand, price, category, description},{rejectWithValue})=>{
    try{
        const res = await api.post(`/admin/add-product`,{name, brand, price, category, description});
        return res.data;
    }
    catch(err){
        return rejectWithValue(err.response?.data ||'Network Error');
    }
});
const postEditProducts = createAsyncThunk('admin/postEditProduct', async({productId, name, brand, price, category, description},{rejectWithValue})=>{
    try{
        const res = await api.post(`/admin/edit-product`,{productId, name, brand, price, category, description});
        return res.data;
    }
    catch(err){
        return rejectWithValue(err.response?.data ||'Network Error');
    }
});
const postDeleteProducts = createAsyncThunk('admin/postDeleteProduct', async({productId},{rejectWithValue})=>{
    try{
        const res = await api.post(`/admin/delete-product`,{productId});
        return res.data;
    }
    catch(err){
        return rejectWithValue(err.response?.data ||'Network Error');
    }
});



const adminSlice = createSlice({
    name : 'admin',
    initialState : {
        products : [],
        productCount: 0,
        singleProduct: null,
        loading: false,
        error: null,
    },
    reducers:{
        clearSingleProduct : (state)=>{
            state.singleProduct = null;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
            state.productCount = action.payload.products.length;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
        .addCase(getProductsById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getProductsById.fulfilled, (state, action) => {
            state.loading = false;
            state.singleProduct = action.payload;
        })
        .addCase(getProductsById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
        .addCase(getEditProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getEditProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.singleProduct = action.payload;
        })
        .addCase(getEditProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
        .addCase(postAddProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(postAddProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
            state.productCount = action.payload.products.length;
        })
        .addCase(postAddProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
        .addCase(postEditProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(postEditProducts.fulfilled, (state) => {
            state.loading = false;
        })
        .addCase(postEditProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
        .addCase(postDeleteProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(postDeleteProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
            state.productCount = action.payload.products.length;
        })
        .addCase(postDeleteProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
    }
})

export {getProducts, getProductsById, getEditProducts, postAddProduct, postDeleteProducts, postEditProducts}

export const adminActions = adminSlice.actions;

export default adminSlice;