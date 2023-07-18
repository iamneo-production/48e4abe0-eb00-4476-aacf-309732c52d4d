
import React, { useState } from "react";
import '../Components/sign.css';
import { useNavigate } from "react-router-dom";


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newpass, setNewpass] = useState("");
  const [confpass, setConfpass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from automatically submitting

    if (name !== "" && email !== "" && newpass !== "" && confpass !== "") {
      // Only navigate to /log if all fields are filled
      navigate("/log");
    }
  };

  return (
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

        <div className="role">
          <label>Role</label>
          <select class="form-select">
                      <option value="1">FOH</option>
                      <option value="2">Kitchen Staff</option>
          </select>
        </div>

        <div id="submit">
          <button className="su" type="submit">
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
}

export default Signup;