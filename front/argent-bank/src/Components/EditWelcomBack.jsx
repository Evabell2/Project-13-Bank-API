import "../style/main.css";
import { useDispatch, useSelector } from "react-redux"
import { setFirstName, setLastName, toggleComponent } from "../redux";
import { store } from "../store"

function EditWelcomeBack() {
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch();
    const firstName = useSelector(state => state.profile.firstName)
    const lastName = useSelector(state => state.profile.lastName)

    const handleFirstNameChange = (event) => {
        dispatch(setFirstName(event.target.value));
    }
    
    const handleLastNameChange = (event) => {
        dispatch(setLastName(event.target.value));
    }

    async function displayData(event) {
        event.preventDefault()
        const url = 'http://localhost:3001/api/v1/user/profile' 
        const data = {firstName, lastName}
        if (!token) {
            await new Promise((resolve) => {
              const unsubscribe = store.subscribe(() => {
                if (store.getState().auth.token) {
                  resolve();
                  unsubscribe();
                }
              });
            });
          }
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        const responseData = await response.json();
        if (response.ok) {
            dispatch(toggleComponent())
        }
        return responseData;
    }

    return (
        <div className="editName">
            <h1>Welcome back</h1>
            <form>
                <div>
                    <div className="input-wrapper">
                        <input 
                            type="text"
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                    </div>

                    <div className="input-wrapper">
                        <input 
                            type="text"
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                    </div>
                </div>
                <div>
                    <button onClick={displayData} className="edit-button">Save</button>
                    <button onClick={() => dispatch(toggleComponent())} className="edit-button">Cancel</button>
                </div>
            </form>
        </div>
    )
}
  
export default EditWelcomeBack;