import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";

const AddNewItems = () => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [entryType, setEntryType] = useState("addToStorage");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addItem({ name: itemName, quantity: parseFloat(itemQuantity), entryType })
    );

    setItemName("");
    setItemQuantity("");
    setEntryType("addToStorage");
  };

  return (
    <div>
      <h1>Inventory Admin App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Item Name:</label>
        <br />
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Item Quantity:</label>
        <br />
        <input
          type="number"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Entry Type:</label>
        <br />
        <select
          name=""
          id=""
          value={entryType}
          onChange={(e) => setEntryType(e.target.value)}
        >
          <option value="addToStorage">Add to storage</option>
          <option value="removeFromStorage">Remove from storage</option>
        </select>
        <br />
        <br />
        <button>Add Item Data</button>
      </form>
    </div>
  );
};

export default AddNewItems;
