import "../style/main.css";
import icon from "../assets/connexion.png"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setToken } from '../redux';

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        const url = 'http://localhost:3001/api/v1/user/login' 
        const data = {"email": email,"password": password}
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        const responseData = await response.json();
        dispatch(setToken(responseData.body.token))
        if (response.ok) {
            navigate('/profile');
        }
        return responseData;
    }

    return (
        <main className="main bg-dark main_login">
            <section className="sign-in-content">
                <img src={icon} alt="connexion" />
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    
                    <button type="submit" onClick={handleSubmit} className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
}
  
export default SignIn;