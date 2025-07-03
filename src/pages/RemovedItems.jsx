import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRemovedItems } from "../actions";

const RemoveItems = () => {
  const dispatch = useDispatch();
  const removeItems = useSelector((state) => state.removeItems);

  const totalItems = removeItems.reduce(
    (acc, curr) => (acc = acc + curr.quantity),
    0
  );

  useEffect(() => {
    dispatch(fetchRemovedItems());
  }, []);
  return (
    <div>
      <h1>Removed Items From Inventory</h1>
      <ul>
        {removeItems.map((item, index) => (
          <li key={index}>
            {item.name}: {item.quantity}
          </li>
        ))}
      </ul>
      <h2>Removed Items Total: {totalItems}</h2>
    </div>
  );
};

export default RemoveItems;
