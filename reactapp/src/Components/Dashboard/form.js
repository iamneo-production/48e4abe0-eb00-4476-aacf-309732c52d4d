import React, { useState } from 'react';
import '../Dashboard/form.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddFoodOrder = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };
  const orderCreate = () => {
    console.log(orderItems);
    toast.success("Order created Succesfully!",{
      theme:"light",
    });
  }

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setOrderItems((prevItems) => [...prevItems, newItem]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (index) => {
    setOrderItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  return (
    <>
    <div className='all10' >
    <div className="food-order-container-new">
      <h2 className="food-order-title-new">Food Order</h2>
      <div className="input-container-new">
        <input
          type="text"
          value={newItem}
          onChange={handleInputChange}
          placeholder="Enter food item"
          className="input-field-new"
        />
        <button onClick={handleAddItem} className="add-button-new">
          Add Item
        </button>
      </div>
      <ul className="order-list-new">
        {orderItems.map((item, index) => (
          <li key={index} className="order-item-new">
            {item}
            <button
              onClick={() => handleDeleteItem(index)}
              className="delete-button-new"
            >
              Delete
            </button>
          </li>

          
          
        ))}
      </ul>
      <button
              onClick={orderCreate}
              className="order-new"
            >
              Add Order
            </button>
    </div>
    </div>
    </>
  );
};
export default AddFoodOrder;
