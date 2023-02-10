import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: 'steve@rogers.com',
    password: 'password123',
    error: null,
    loading: false,
  };

export const loginSlice = createSlice ({
    name: "login",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
})
export const { setEmail, setPassword, setError, setLoading} = loginSlice.actions