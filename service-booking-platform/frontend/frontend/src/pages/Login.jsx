import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    const user =
      JSON.parse(
        localStorage.getItem("user")
      );

    if(
      user &&
      user.email === email &&
      user.password === password
    ){

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      navigate("/dashboard");

    }else{

      alert("Invalid Credentials");

    }

  };

  return(

    <div className="auth-page">

      <div className="auth-card">

        <h1>Login</h1>

        <p className="subtitle">
          Welcome Back
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="bottom-text">
          New User?
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>

    </div>

  );
}

export default Login;