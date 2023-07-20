
import React, { useState } from "react";
import '../Components/sign.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';   
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newpass, setNewpass] = useState("");
  const[role,setRole]=useState("");

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    const reg={"role":role,"name":name,"email":email, "password":newpass};
    console.log(reg);
    const result=await axios.post("http://localhost:8080/add",reg);
    console.log(result.data);
    
      
      if (result.data === "Signup Successful !") {
        toast.success('Signup Successful !', {
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
          navigate('/login');
        }, 1500);
          
        
      } else if (result.data === "Email ID Already Exists") {
        toast.error('Email ID Already Exists', {
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
      console.log(result.data);
      
      }
   };
    
    return (
      
    <>
    <form className="sign" onSubmit={handleSubmit}>
      <div className="conte">
        <div>
          <h1>Signup</h1>
        </div>

        <div className="password">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="password">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="password">
          <label>New Password</label>
          <input
            type="password"
            value={newpass}
            onChange={(e) => setNewpass(e.target.value)}
            pattern=".{8,}"   required title="8 characters minimum"
          />
        </div>

        <div className="password">
          <label>Role</label>
          <select class="form-select" required value={role}
                      onChange={(e) => setRole(e.target.value)}>
          <option value="" selected data-default>Select your Role</option> 
                      <option value="Foh">FOH</option>
                      <option value="Kitchen Staff">Kitchen Staff</option> 
                    
          </select>
        </div>

        <div id="submit">
          <button className="su" type="submit" onSubmit={handleSubmit}>
            Sign up
          </button>
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
    </>
  );
}

export default Signup;