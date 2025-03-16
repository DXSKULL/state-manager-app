import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const apiKey = import.meta.env.VITE_API_KEY;

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
    const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    const news = data.articles.map(item => ({...item, id: Math.random().toString(36).substring(2)}))
    return news
})

const newsSlice = createSlice({
    name: "news",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.isLoading = false
                state.items = action.payload
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message
            })
    }
})

export default newsSlice.reducer