import { configureStore } from '@reduxjs/toolkit'
import LanguageSlice from './Components/Slices/LanguageSlice'
import SingleWorkSlice from './Components/Slices/SingleWorkSlice'

export default configureStore({
    reducer: {
        language: LanguageSlice,
        singleWork: SingleWorkSlice
    },
})
