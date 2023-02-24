import React from 'react';
import Home from '../src/pages/Home';
import SignIn from '../src/pages/SignIn'
import Header from "../src/Components/Header"
import User from "../src/pages/User"
import Footer from "../src/Components/Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import { store } from "./store"

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <Provider store={store}>
        <BrowserRouter>

            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<SignIn />} />
                <Route path='/profile' element={<User />} />
            </Routes>
            <Footer />

        </BrowserRouter>,
    </Provider>
)
