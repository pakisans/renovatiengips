import {createSlice} from "@reduxjs/toolkit";
import { setLanguageToLocalStorage } from "../Base/LocalStorage";

export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        language: '',
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload
            setLanguageToLocalStorage(action.payload)
        },
    }
});

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer
