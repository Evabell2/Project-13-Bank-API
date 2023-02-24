import "../style/main.css";
import { useDispatch } from "react-redux"
import { toggleComponent } from "../redux";

function EditWelcomeBack() {
    const dispatch = useDispatch();

    return (
        <div className="editName">
            <h1>Welcome back</h1>
            <form>
                <div>
                    <div className="input-wrapper">
                        <label htmlFor="username">firstname</label>
                        <input 
                            type="text" 
                        />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="password">lastName</label>
                        <input 
                            type="password" 
                        />
                    </div>
                </div>
                <div>
                    <button className="edit-button">Save</button>
                    <button onClick={() => dispatch(toggleComponent())} className="edit-button">Cancel</button>
                </div>
            </form>
        </div>
    )
}
  
export default EditWelcomeBack;