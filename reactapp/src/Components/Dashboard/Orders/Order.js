import React, { useEffect, useState } from 'react';
import '../Orders/order.css';
import axios from 'axios';
import { toast } from 'react-toastify';

function Order() {
  const [order, setOrders] = useState([]);
  const username = "pradeek";
  const password = "2004";
  const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

  const headers = {
    Authorization: authHeader,
    "Content-Type": "application/json",
  };

  const fetchData = async () => {
    const orders = await axios.get("http://localhost:8080/getAllOrders",{headers});
    setOrders(orders.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete("http://localhost:8080/order/" + orderId,{headers});
      // Filter out the deleted order from the current state
      setOrders((prevOrders) => prevOrders.filter((ord) => ord.ordid !== orderId));
      toast.success('Order Deleted Successfully !', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      toast.error('Error deleting order!', {
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
      <div className='sideall2'></div>
      <div className='sam'>
        <div id='orders'>
          <h1 style={{ textAlign: 'center' }} className='ord'>Orders</h1>
          <div>
            <ul>
              {order.length > 0 && (
                <>
                  {order.map(ord => (
                    <li key={ord.ordid}>
                      <h3><center>Order #{ord.ordid}</center></h3>
                      <ul>
                        {ord.ordername.split(",").map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <div className='butt-dash'>
                        <button className='btn btn-danger m-1' onClick={() => handleDeleteOrder(ord.ordid)}>Delete</button>
                      </div>
                      <pre> </pre>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
        <img src='https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=1380&t=st=1690003314~exp=1690003914~hmac=e2a12c3d0f53458a42221bef9da60fee99def47527ee0d0eaa94f6882658086b' width={'1700px'} height={'500px'} />
      </div>
    </>
  );
}

export default Order;
