import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from './axiosConfig'

export const fetchProducts = createAsyncThunk('shop/fetchProducts', async({page = 1 , limit = 20},{rejectWithValue})=>{
    try{
        const res = await api.get(`/products?page=${page}&limit=${limit}`);
        return res.data;
    }catch(err){
        return rejectWithValue(err.response?.data ||'Network Error')
    }
})

export const fetchProductsById = createAsyncThunk('shop/fetchProductsById', async(id,{rejectWithValue})=>{
    try{
        const res = await api.get(`/products/${id}`);
        return res.data.product;
    }catch(err){
        return rejectWithValue(err.response?.data ||'Network Error')
    }
})


const shopSlice = createSlice({
    name : 'shop',
    initialState : {
        products :  [],
        singleProduct: null,
        loading: false,
        error: null,
        currentPage : 1,
        totalPages : 1,
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
            state.currentPage = action.payload.currentPage;
            state.totalPages = action.payload.totalPages;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
        .addCase(fetchProductsById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProductsById.fulfilled, (state, action) => {
            state.loading = false;
            state.singleProduct = action.payload;
        })
        .addCase(fetchProductsById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        });
    },
})

export default shopSlice;