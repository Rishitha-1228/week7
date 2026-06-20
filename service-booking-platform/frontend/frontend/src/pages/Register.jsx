import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      bookings: [],
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    // Clear previous user's data
    localStorage.removeItem("bookings");
    localStorage.removeItem("paymentStatus");
    localStorage.removeItem("currentUser");

    alert("Registration Successful ✅");

    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Register</h1>

        <p className="subtitle">
          Create Your Account
        </p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="👤 Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <input
            type="email"
            placeholder="📧 Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="🔒 Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p className="bottom-text">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;