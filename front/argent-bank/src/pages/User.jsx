import "../style/main.css";
import { useDispatch, useSelector } from "react-redux"
import { toggleComponent, setLastName, setFirstName } from "../redux";
import EditWelcomeBack from "../Components/EditWelcomBack"
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function User() {
    const dispatch = useDispatch();
    const showComponent = useSelector(state => state.profile.showComponent);
    const theFirstName = useSelector(state => state.profile.firstName)
    const theLastName = useSelector(state => state.profile.lastName)

    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        async function getData() {
            const url = 'http://localhost:3001/api/v1/user/profile' 
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                }
            })
            const responseData = await response.json();
            dispatch(setFirstName(responseData.body.firstName))
            dispatch(setLastName(responseData.body.lastName))
            return responseData;
        }
        getData()
    }, [token, navigate])
    
    
    return (
        <main className="main bg-dark main_user">

            <div className={showComponent && <EditWelcomeBack /> ? "hidden_header" : "header"}>
                <h1>Welcome back
                    <br />
                    <span>{theFirstName} </span>
                    <span>{theLastName}!</span>
                </h1>
                <button onClick={() => dispatch(toggleComponent())} className="edit-button">Edit Name</button>
            </div>
            {showComponent && <EditWelcomeBack />}

            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <Link to={""} className="transaction-button">View transactions</Link>
                </div>
            </section>

            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <Link to={""} className="transaction-button">View transactions</Link>
                </div>
            </section>

            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <Link to={""} className="transaction-button">View transactions</Link>
                </div>
            </section>
            
        </main>
    );
}
  
export default User;