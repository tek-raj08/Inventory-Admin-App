import React from "react";

import { useSelector } from "react-redux";
const RemainingItems = () => {
  const removeItems = useSelector((state) => state.removeItems);
  const inventory = useSelector((state) => state.inventory);

  const totalDispatchedItems = removeItems.reduce(
    (acc, curr) => (acc = acc + curr.quantity),
    0
  );

  const totalInventoryItems = inventory.reduce(
    (acc, curr) => (acc = acc + curr.quantity),
    0
  );

  const remainingItems = totalInventoryItems - totalDispatchedItems;

  return (
    <div>
      <h1>Remaining Items in Inventory</h1>
      <h2>Inventory Total: {remainingItems}</h2>
    </div>
  );
};

export default RemainingItems;
