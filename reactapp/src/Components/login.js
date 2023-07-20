import React, { useState } from "react";
import "../Components/login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';  
import axios from "axios";
function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    
  
  
    const navigate = useNavigate();
  
    const handlePass = (e) => {
      setPass(e.target.value);
    };
  
    const handleEmail = (e) => {
      setEmail(e.target.value);
    };
    
    const handleSubmit = async(e) => {
      e.preventDefault(); // Prevents the form from automatically submitting
      const login={"email":email,"password":pass};
      const result =await axios.post("http://localhost:8080/auth/login",login);
      console.log(result);

      if (result.data === "Login Successful !") {
  
        toast.success('Login Successful !', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        setTimeout(() => {
        
            navigate('/dash');
        }, 1500);

    } else if (result.data === "Invalid Password") {
        toast.error('Invalid password!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    } else {
        toast.error('Invalid Email ID !', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
      }
      
      
    };
  
    return (
      <form className="si" onSubmit={handleSubmit}>
        <div className="cont">
          <div>
            <h1>Login In</h1>
          </div>
          <div className="userName">
            <label>Email ID</label>
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
  
          <div className="password">
            <label>Password</label>
            <input
              type="password"
              value={pass}
              onChange={handlePass}
              pattern=".{8,}"   required title="8 characters minimum"
            />
          </div>
        
        
  
          <div id="submit">
            <button className="su" type="submit" onSubmit={handleSubmit}>
              Log In
            </button>
          </div>
          <div id="new">
            Don't have an account? <Link to="/signup">Signup</Link>
          </div>
        </div>
        <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
      </form>
    );
  }
export default Login;  