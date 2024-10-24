import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import '../styles/Login.css';
const Login = () => {
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const savedUser = JSON.parse(localStorage.getItem('user')); // قراءة المستخدم من localStorage
        if (savedUser && savedUser.email === email && savedUser.password === password) {
            setUser(savedUser);
            navigate('/courses');
        } else {
            alert("Invalid login credentials");
        }
    };
    return (
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button className="button" type="submit">Login</button>
            </form>
        </div>
    );
};
export default Login;
