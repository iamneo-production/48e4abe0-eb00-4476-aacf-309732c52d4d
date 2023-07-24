import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { FaMoneyBill } from 'react-icons/fa';
import Dashboard from '../Dashboard/Analysis/DashboardPage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  

import '../Dashboard/dash.css';
import Order from '../Dashboard/Orders/Order';
import PriceList from '../Dashboard/Price/price';
import AddFoodOrder from './AddFood/form';
import FeedBack from './FeedBack/FeedBackTable';
const Nav = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const navigate = useNavigate();

 

  const handleLogout = () => {
  
    toast.error('Logged Out Successfully !', {
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
      
  };
  useEffect(() => {
    // Check if the currentPage is stored in the localStorage
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(savedPage);
    }
  }, []);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Save the currentPage to localStorage
    localStorage.setItem('currentPage', page);
  };
  let content = null;
  switch (currentPage) {
    
  
    case 'reports':
      content = <Order />;
      break;
    case 'settings':
      content = <PriceList />;
      break;
      case 'form':
      content = <AddFoodOrder/>;
      break;
      case 'feedback':
      content = <FeedBack/>;
      break;
  
 
    default:
      content = <Order/>;
      break;
  }

  return (
     <>

     
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-heading">Admin Dashboard</div>
        <ul className="sidebar-menu">
         
          <li
            className={`sidebar-menu-item ${
              currentPage === 'reports' ? 'active' : ''
            }`}
            onClick={() => handlePageChange('reports')}
          >
            <span className="sidebar-menu-item-icon">📄</span>
            <span className="sidebar-menu-item-text">Orders</span>
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === 'settings' ? 'active' : ''
            }`}
            onClick={() => handlePageChange('settings')}
          >
            <span className="sidebar-menu-item-icon"><FaMoneyBill /></span>
            <span className="sidebar-menu-item-text">Prices</span>
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === 'form' ? 'active' : ''
            }`}
            onClick={() => handlePageChange('form')}
          >
            <span className="sidebar-menu-item-icon">📄</span>
            <span className="sidebar-menu-item-text">New Order</span>
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === 'feedback' ? 'active' : ''
            }`}
            onClick={() => handlePageChange('feedback')}
          >
            <span className="sidebar-menu-item-icon">📄</span>
            <span className="sidebar-menu-item-text">FeedBack</span>
          </li>
   
    
          <li className="sidebar-menu-item" onClick={handleLogout}>
            <span className="sidebar-menu-item-icon"><FiLogOut /></span>
            <span className="sidebar-menu-item-text">Log out</span>
          </li>
        </ul>
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
      <div className="content">{content}</div>
    </div>
    </>

  );
};
export default Nav;
