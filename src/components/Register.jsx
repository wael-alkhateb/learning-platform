import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import '../styles/Register.css';
const Register = () => {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && email && password) {
            const newUser = { username, email, password };
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
            navigate('/courses');
        } else {
            alert("Please fill in all fields");
        }
    };
    return (
        <div className="register">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2 className="register-h2">Register</h2>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button className="button" type="submit">Register</button>
            </form>
        </div>
    );
};
export default Register;