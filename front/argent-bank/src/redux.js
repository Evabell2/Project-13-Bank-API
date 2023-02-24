import { createSlice } from "@reduxjs/toolkit";

export const authentificationSlice = createSlice ({
    name: "auth",
    initialState: {
        token: null
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = null;
        },
    }
})
export const profileSlice = createSlice ({
    name: "profile",
    initialState: {
        showComponent: false,
    },
    reducers: {
        toggleComponent: state => {
            state.showComponent = !state.showComponent
        },
    }
})

export const { setToken, clearToken } = authentificationSlice.actions;
export const { toggleComponent } = profileSlice.actions