import { configureStore } from '@reduxjs/toolkit'
import LanguageSlice from './Components/Slices/LanguageSlice'

export default configureStore({
    reducer: {
        language: LanguageSlice
    },
})
