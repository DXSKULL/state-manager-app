import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    username: "",
    isAuth: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.username = action.payload
            state.isAuth = true
        },

        logout: (state) => {
            state.username = ""
            state.isAuth = false
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer