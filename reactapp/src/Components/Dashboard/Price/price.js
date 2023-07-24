import React,{useState,useEffect}from 'react';
import '../Price/price.css';

import axios from 'axios';

function PriceList() {
  const [price, setPrice] = useState([]);
  const username = "pradeek";
  const password = "2004";
  const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

  const headers = {
    Authorization: authHeader,
    "Content-Type": "application/json",
  };

  const fetchData = () => {
    axios.get("http://localhost:8080/getAllPrices",{headers}).then(response => {
      setPrice(response.data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className='sideall4'>
      
      </div>
      
      <div className="price-list-container">
        <h1>Price List</h1>
        
        <table >
                          <thead>
                              <tr>
                                  <th scope="col">ID</th>
                                  <th scope="col">Items</th>
                                  <th scope="col">Prices</th>
                                  <th scope="col">Category</th>
                                
                              </tr>
                          </thead>
                          <tbody class="table_body">
                          {price.length > 0 && (
                              <>
                          {price.map(price => (
                              <tr>
                                <td key={price.fid}>{price.fid}</td>
                                <td key={price.fid}>{price.item}</td>
                                <td key={price.fid}>{price.price}</td>
                                <td key={price.fid}>{price.category}</td>
                                {/* <td><Button className='btn-danger' type="submit" onClick={() => {axios.delete("http://localhost:8080/delCase/"+feed.fid);window.location.reload();}}>close</Button></td> */}
                                {/* <td><Button className='btn-primary' type="submit" onClick={() => navigate("/updatecase")}>Edit</Button></td> */}
                              </tr>
                          ))}
                              </>
                          )}
                          </tbody>
            
          
        </table><br></br>
        {/* <button className="update-button">Update Prices</button> */}
      </div>
      
      
    </>
  );
}

export default PriceList;
