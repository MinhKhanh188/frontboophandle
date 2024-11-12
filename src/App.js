// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeGuest from "./pages/HomeGuest";
import Home from "./pages/Home";
import CustomerLogin from "./components/auth/CustomerLogin";
import CustomerRigister from "./components/auth/CustomerRigister";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<CustomerLogin />} />
            <Route path="/register" element={<CustomerRigister />} />
          </Routes>
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
