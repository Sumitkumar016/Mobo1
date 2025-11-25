import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import api from "./axiosConfig";


const getUser = createAsyncThunk('auth/getUser', async(_,{rejectWithValue})=>{
    try{
        const res = await api.get(`/getuser`);
        return res.data;
    }catch(err){
        return rejectWithValue(err.response?.data ||'Network Error');
    }
})

const postSignup = createAsyncThunk('auth/postSignup', async({name, email, password, phone},{rejectWithValue})=>{
    try{
        const res = await api.post(`/signup`, {name, email, password, phone})
        return res.data;
    }catch(err){
        return rejectWithValue(err.response?.data ||'Network Error');
    }
})

const postLogin = createAsyncThunk('auth/postlogin', async({email, password},{rejectWithValue})=>{
    try{
        const res = await api.post(`/login`, {email, password})
        return res.data;
    }catch(err){
        return rejectWithValue(err.response?.data ||'Network Error');
    }
})

const postLogout = createAsyncThunk('auth/postlogout', async(_,{rejectWithValue})=>{
    try{
        const res = await api.post(`/logout`)
        return res.data;
    }catch(err){
        return rejectWithValue(err.response?.data ||'Network Error');
    }
})

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload?.user || null;
            state.isAuthenticated = !!action.payload?.user;
        })
        .addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
            state.user = null;
            state.isAuthenticated = false;
        })
        .addCase(postSignup.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(postSignup.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase(postSignup.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
        .addCase(postLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(postLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        })
        .addCase(postLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
        .addCase(postLogout.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(postLogout.fulfilled, (state) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
        })
        .addCase(postLogout.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        })
    }
})
export const authActions = authSlice.reducer;

export {getUser, postLogin, postLogout, postSignup}
export default authSlice;