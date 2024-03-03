import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <Navbar />
      <div className="admin-panel">
        <div className="admin-sidebar">
          <div
            className={`sidebar-menu ${
              selectedMenu === "dashboard" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("dashboard")}
          >
            Dashboard
          </div>
          <div
            className={`sidebar-menu ${
              selectedMenu === "orders" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("orders")}
          >
            Orders
          </div>
          <div
            className={`sidebar-menu ${
              selectedMenu === "products" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("products")}
          >
            Products
          </div>
          <div
            className={`sidebar-menu ${
              selectedMenu === "customers" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("customers")}
          >
            Customers
          </div>
          {/* Add more sidebar menus as needed */}
        </div>
        <div className="admin-content">
          {selectedMenu === "dashboard" && <Dashboard />}
          {selectedMenu === "orders" && <Orders />}
          {selectedMenu === "products" && <Products />}
          {selectedMenu === "customers" && <Customers />}
          {/* Add more components for different menu selections */}
        </div>
          </div>
          <Footer />
    </>
  );
};

const Dashboard = () => {
  return <div className="dashboard">Dashboard Content</div>;
};

const Orders = () => {
  return <div className="orders">Orders Content</div>;
};

const Products = () => {
  return <div className="products">Products Content</div>;
};

const Customers = () => {
  return <div className="customers">Customers Content</div>;
};


export default AdminPanel;
