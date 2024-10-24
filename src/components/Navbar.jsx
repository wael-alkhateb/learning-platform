import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import '../styles/Navbar.css';
const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    const handleLogout = () => {
        setUser(null);
    };
    return (
        <nav className="navbar">
            <h1 className="logo">Learning Platform</h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/about">About</Link></li>
                {user ? (
                  <>
                        <li>
                            <button className="logout" onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};
export default Navbar;