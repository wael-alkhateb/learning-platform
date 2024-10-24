import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import About from "./Pages/About";
import CourseDetail from "./components/CourseDetail";
import Login from "./components/Login";
import Register from "./components/Register";
import { UserProvider } from "./context/UserContext";
import ProtectedRouter from "./components/ProtectedRouter";
import './App.css';

function App() {
  return (
    <UserProvider>
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={
          <ProtectedRouter>
            <Courses />
            </ProtectedRouter>} 
            />
        <Route path="/courses/:id" element={
          <ProtectedRouter>
            <CourseDetail />
            </ProtectedRouter>}
             />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;
