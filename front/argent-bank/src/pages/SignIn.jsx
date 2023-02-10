import "../style/main.css";
import icon from "../assets/connexion.png"
import { useState } from "react";

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(
        url = 'http://localhost:3001/user/login', 
        data = {"email": email,"password": password}) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const responseData = await response.json();
        console.log("Request succeeded:", responseData);
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
                    
                    <button onClick={handleSubmit} className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
}
  
export default SignIn;