import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./redux.js"

export const store = configureStore ({
    reducer: {
        login: loginSlice.reducer,
    }
})