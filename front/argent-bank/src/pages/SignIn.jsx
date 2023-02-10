import "../style/main.css";
import { Link } from 'react-router-dom'
import icon from "../assets/connexion.png"
import { useDispatch, useSelector } from "react-redux"
import { setAutoFreeze } from "immer";
import { setEmail } from "../redux";

function SignIn() {
    const signIn = useSelector((state)=>state.login)
    const dispatch = useDispatch()

//    onChange={() => dispatch(setEmail(signIn.email))}

//    const handleSubmit = (event) => {
//     event.preventDefault()
//     dispatch(setEmail)
//    }

    return (
        <main class="main bg-dark main_login">
            <section class="sign-in-content">
                <img src={icon} alt="connexion" />
                <h1>Sign In</h1>
                <form>
                    <div class="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username" value={signIn.email}/>
                    </div>

                    <div class="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password" value={signIn.password} />
                    </div>

                    <div class="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </div>
                    
                    <Link to="/profile" class="sign-in-button">Sign In</Link>
                </form>
            </section>
        </main>
    );
}
  
export default SignIn;