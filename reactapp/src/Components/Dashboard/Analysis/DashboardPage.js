import React from 'react';
import '../Analysis/Dashboard.css';


function Dashboard() {
  return (
    <>
      
    <div className='sideall'>
      
    </div>
      <div className="dashboard-container">
   

        <h1>Kitchen Display System</h1><br></br>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Total Orders</h3>
            <p>Total: 100</p><br></br>
           
          </div>
          <div className="dashboard-card">
            <h3>Menu Items</h3>
            <p>Total: 50</p><br></br>
        
          </div>
          <div className="dashboard-card">
            <h3>Revenue</h3>
            <p>Total: INR 50000</p><br></br>
            
          </div>
          <div className="dashboard-card">
            <h3>Customers</h3>
            <p>Total: 100</p><br></br>
           
          </div>
          <div className="dashboard-card">
            <h3>Current Orders</h3>
            <p>Total: 10</p><br></br>
          
          </div>
          <div className="dashboard-card">
            <h3>Pending Orders</h3>
            <p>Total: 5</p><br></br>
           
          </div>
          
        </div>
      </div>
     

      
    </>
  );
}

export default Dashboard;

