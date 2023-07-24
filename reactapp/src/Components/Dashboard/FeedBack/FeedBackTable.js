import React, { useState, useEffect } from "react";
import axios from "axios";
import './feed.css';

function FeedBack() {
  const [feeds, setFeeds] = useState([]);

  const fetchData = () => {
    const username = "pradeek";
    const password = "2004";
    const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
  
    const headers = {
      Authorization: authHeader,
      "Content-Type": "application/json",
    };
    axios.get("http://localhost:8001/feedback/getFeeds",{headers})
      .then(response => {
        setFeeds(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleMarkAsRead = (feedId) => {
    axios.delete(`http://localhost:8001/feedback/${feedId}`)
      .then(() => {
        // Remove the deleted feedback from the local state
        setFeeds(prevFeeds => prevFeeds.filter(feed => feed.fid !== feedId));
      })
      .catch(error => {
        console.error("Error marking feedback as read:", error);
      });
  };

  return (
    <>
    
      <div className='sideall8'></div>
      <div className="feed-list-container">
        <h1>Messages</h1>
        <table>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Feedback</th>
              <th scope="col">Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table_body">
            {feeds.length > 0 && (
              <>
                {feeds.map(feed => (
                  <tr key={feed.fid}>
                    <td>{feed.fid}</td>
                    <td>{feed.name}</td>
                    <td>{feed.email}</td>
                    <td>{feed.message}</td>
                    <td>{feed.phone}</td>
                    <td>
                      <button
                        className='delete-button'
                        type="button"
                        onClick={() => handleMarkAsRead(feed.fid)}
                      >
                        Mark as Read
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
        <br></br>
      </div>
    </>
  );
}

export default FeedBack;

