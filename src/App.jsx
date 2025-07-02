import React from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Inventory from "./pages/Inventory";
import RemovedItems from "./pages/RemovedItems";
import RemainingItems from "./pages/RemainingItems";
import AddNewItems from "./pages/AddNewItems";
const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <li>
            <Link to={"/inventory"}>Inventory</Link>
          </li>
          <li>
            <Link to={"/removed-items"}>Removed Items</Link>
          </li>
          <li>
            <Link to={"/remaining-items"}>Remaining Items</Link>
          </li>
          <li>
            <Link to={"/"}>Add New Items</Link>
          </li>
        </nav>
        <Routes>
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/removed-items" element={<RemovedItems />} />
          <Route path="/remaining-items" element={<RemainingItems />} />
          <Route path="/" element={<AddNewItems />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
