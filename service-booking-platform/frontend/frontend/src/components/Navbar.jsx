import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>SkillConnect Pro</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/services">
          Services
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/profile">
          Profile
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link
          to="/register"
          className="signup-btn"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;