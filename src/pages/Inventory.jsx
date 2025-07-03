import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInventory } from "../actions";

const Inventory = () => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory);

  const totalItems = inventory.reduce(
    (acc, curr) => (acc = acc + curr.quantity),
    0
  );

  useEffect(() => {
    dispatch(fetchInventory());
  }, []);
  return (
    <div>
      <h1>Inventory Items</h1>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>
            {item.name}: {item.quantity}
          </li>
        ))}
      </ul>
      <h2>Total Inventory Items: {totalItems}</h2>
    </div>
  );
};

export default Inventory;
