import {createSlice} from "@reduxjs/toolkit";

export const singleWorkSlice = createSlice({
    name: 'language',
    initialState: {
        headerTitle: '',
        headerBackground: ''
    },
    reducers: {
        changeHeaderTitle: (state, action) => {
            state.headerTitle = action.payload
        },
        changeHeaderBackground: (state, action) =>{
            state.headerBackground = action.payload
        }
    }
});

export const { changeHeaderTitle, changeHeaderBackground } = singleWorkSlice.actions

export default singleWorkSlice.reducer
