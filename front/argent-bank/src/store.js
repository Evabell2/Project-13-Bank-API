import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./redux.js"
import { authentificationSlice } from "./redux.js"

export const store = configureStore ({
    reducer: {
        auth: authentificationSlice.reducer,
        profile: profileSlice.reducer
    }
})