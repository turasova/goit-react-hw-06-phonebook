import { createSlice } from "@reduxjs/toolkit";



 export const filterSlice = createSlice({
    name: 'filter',
    initialState:'',
    reducers: {
        filterSet(_, action) {
            return action.payload;
        }
    }
})

export const getFilter = state => state.filter;

export const { filterSet } = filterSlice.actions;
