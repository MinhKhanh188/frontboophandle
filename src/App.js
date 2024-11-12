// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppContextProvider } from "./context/AppContext";
//import HomeGuest from "./pages/HomeGuest";
import Home from "./pages/Home";
import CustomerLogin from "./components/auth/CustomerLogin";
import CustomerRigister from "./components/auth/CustomerRigister";
import CarDetail from "./pages/customer/CarDetail";


function App() {
  return (
    <AppContextProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<CustomerLogin />} />
            <Route path="/register" element={<CustomerRigister />} />
            <Route path="/car/:carId" element={<CarDetail />} /> {/* Add route for CarDetail */}
          </Routes>
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
