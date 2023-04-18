import { Link } from "react-router-dom";
const ProfilePage = () => {
    return ( 
        <div className="profilepage">
            <div className="section1">
                    <div className="navlists">
                        <ul>
                            <Link to="/">MY MOVIES</Link>
                            <Link to="/my_profile"> MY PROFILE</Link>
                            <Link to="/get_quote"> GET QUOTE</Link>
                            <Link to="/logout">LOGOUT</Link>
                        </ul>
                    </div>
                </div>
                <div className="section2">
                <h1>Profile Page</h1>
                </div>
        </div>
     );
}
 
export default ProfilePage;