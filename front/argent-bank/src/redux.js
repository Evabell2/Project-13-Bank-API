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
    }
})
export const profileSlice = createSlice ({
    name: "profile",
    initialState: {
        showComponent: false,
        firstName: "Tony",
        lastName: "Jarvis"
    },
    reducers: {
        toggleComponent: state => {
            state.showComponent = !state.showComponent
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        }
    }
})

export const { setToken } = authentificationSlice.actions;
export const { toggleComponent } = profileSlice.actions
export const { setFirstName } = profileSlice.actions
export const { setLastName } = profileSlice.actions