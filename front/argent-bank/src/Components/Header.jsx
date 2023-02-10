import { Link } from 'react-router-dom'
import logo from "../assets/argentBankLogo.png"
import icon from "../assets/connexion.png"
import "../style/main.css";

function Header() {
    return (
        <nav className="main-nav">

            <Link to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
            </Link>

            <Link to="/login" className="main-nav-item">
                <img src={icon} alt="connexion" />Sign In
            </Link>
            
       </nav>
    )
  }
  
  export default Header;