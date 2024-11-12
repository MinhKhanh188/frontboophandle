// src/context/AppContext.js
import React, { useEffect, useState, createContext, useCallback, useRef } from "react";
import axios from "axios";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [rentallocations, setRentAllocations] = useState([]);
    const [selectedLocationId, setSelectedLocationId] = useState(null);


    useEffect(() => {
        // Fetch car data from the JSON server
        axios
            .get("http://localhost:9999/cars")
            .then((response) => setCars(response.data))
            .catch((error) => console.error("Error fetching car data:", error));
    }, []);

    useEffect(() => {
        // Fetch rent allocation data from the JSON server
        axios
            .get("http://localhost:9999/rentallocations")
            .then((response) => setRentAllocations(response.data))
            .catch((error) => console.error("Error fetching rent allocation data:", error));
    }, []);

    const value = {
        cars,
        rentallocations,
        selectedLocationId,
        setSelectedLocationId,
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
};