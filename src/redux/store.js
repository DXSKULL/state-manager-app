import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../redux/slices/themeSlice"
import userReducer from "../redux/slices/userSlice"
import newsReducer from "../redux/slices/newsSlice"

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer,
        news: newsReducer
    }
})