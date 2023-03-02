import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/argentBankLogo.png"
import icon from "../assets/connexion.png"
import iconOut from "../assets/sign-out-option.png"
import "../style/main.css";
import { useSelector } from "react-redux"

function Header() {
    const token = useSelector(state => state.auth.token)
    const firstName = useSelector(state => state.profile.firstName)
    const location = useLocation()
    
    return (
        <nav className="main-nav">

            <Link to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
            </Link>

            <div>
                <Link 
                    to="/login" 
                    className={!token || location.pathname !== "/profile" ? "main-nav-item block" : "main-nav-item hidden"}
                >
                    <img src={icon} alt="connexion" />Sign In
                </Link>

                <Link to="" className={!token || location.pathname !== "/profile" ? "main-nav-item hidden" : "main-nav-item block"}>
                    <img src={icon} alt="connexion" />{firstName}
                </Link>

                <Link 
                    to="/" 
                    className={!token || location.pathname !== "/profile" ? "main-nav-item hidden" : "main-nav-item block"}
                >
                    <img src={iconOut} alt="connexion" />Sign Out
                </Link>
            </div>

       </nav>
    )
  }
  
  export default Header;