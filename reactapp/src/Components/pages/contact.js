import React, { useState } from "react";
import "../pages/contact.css";
import Navbar from "./navbar";
import Footer from "./footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const[num,setNum]=useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reg = { name: name, email: email, message: message ,phone:num};
    console.log(reg);
    try {
      const result = await axios.post("http://localhost:8001/feedback/addf", reg);
      console.log(result.data);
      toast.success('Message Sent Successfully!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // Clear the form fields after successful submission
      setName("");
      setEmail("");
      setMessage("");
      setNum("");
    } catch (error) {
      toast.error('Failed to send message!', {
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
    <>
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Your Number"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Send Message</button>
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
        <br></br>
        <h2>Our Social Media Platforms</h2>
        <div className="social-media-icons">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFvz4UvsobeMkUYVCUvXTKqHbIxWxIIs6EJOFYIFj&s"
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://png.pngtree.com/element_our/sm/20180515/sm_5afaf0c36298b.jpg"
              alt="Facebook"
            />
          </a>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <Footer />
    </>
  );
};

export default Contact;

