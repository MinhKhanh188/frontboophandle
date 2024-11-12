// src/context/AppContext.js
import React, { useEffect, useState, createContext, useCallback, useRef } from "react";
import axios from "axios";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        // Fetch car data from the JSON server
        axios
            .get("http://localhost:9999/cars")
            .then((response) => setCars(response.data))
            .catch((error) => console.error("Error fetching car data:", error));
    }, []);

    const value = {
        cars,
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
};