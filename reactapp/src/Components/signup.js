// Signup.js
import React, { useState } from "react";
import "../Components/sign.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { setRole } from "../action"; // Import the setRole action

function Signup({ setRole }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newpass, setNewpass] = useState("");
  const [role, setRoleState] = useState("");

  const navigate = useNavigate();
  const username = "pradeek";
  const password = "2004";
  const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

  const headers = {
    Authorization: authHeader,
    "Content-Type": "application/json",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reg = { role: role, name: name, email: email, password: newpass };
    console.log(reg);

    try {
      const result = await axios.post("http://localhost:8080/add", reg, {
        headers,
      });

      if (result.data === "Signup Successful !") {
        toast.success("Signup Successful !", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setRole(role); // Dispatch the setRole action with the role data
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else if (result.data === "Email ID Already Exists") {
        toast.error("Email ID Already Exists", {
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
    } catch (error) {
      console.error(error);
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
              pattern=".{8,}"
              required
              title="8 characters minimum"
            />
          </div>

          <div className="password">
            <label>Role</label>
            <select
              className="form-select"
              required
              value={role}
              onChange={(e) => setRoleState(e.target.value)}
            >
              <option value="" selected data-default>
                Select your Role
              </option>
              <option value="Foh">FOH</option>
              <option value="Kitchen Staff">Kitchen Staff</option>
            </select>
          </div>

          <div id="submit">
            <button className="su" type="submit">
              Sign up
            </button>
          </div>
        </div>
      </form>
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
    </>
  );
}

export default connect(null, { setRole })(Signup);
