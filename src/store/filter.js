import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name : 'filters',
    initialState : {
        categories: [],
        brands: [],
        rating: null,
        price: 0,
    },
    reducers:{
        toggleCategory : (state, action)=>{
            const category = action.payload;
            if(state.categories.includes(category)){
                state.categories = state.categories.filter(c=>c!==category);
            }else{
                state.categories.push(category);
            }
        },
        toggleBrand : (state, action)=>{
            const brand = action.payload;
            if(state.brands.includes(brand)){
                state.brands = state.categories.filter(c=>c!==brand);
            }else{
                state.brands.push(brand);
            }
        },
        setRating: (state, action)=>{
            state.rating = action.payload;
        },
        setPrice: (state, action)=>{
            state.price = action.payload;
        },
        clearFilters: (state)=>{
            state.categories = [];
            state.brands = [];
            state.rating = null;
            state.price = 0;
        }
    }
})

export const filterActions = filterSlice.actions;

export default filterSlice;