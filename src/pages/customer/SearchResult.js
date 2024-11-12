// src/pages/customer/SeachResult.js

import React, { useContext} from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";



const SearchResult = () => {

    const { cars, selectedLocationId } = useContext(AppContext);
    const navigate = useNavigate();

    console.log("Selected Location ID in SearchResult:", selectedLocationId); // Check if it's logged

    const filteredCars = selectedLocationId 
    ? cars.filter(car => String(car.rentalLocatioID) === String(selectedLocationId))
    : [];


    // Log filtered cars
    console.log("Filtered Cars:", filteredCars);


    const handleCarClick = (carId) => {
        navigate(`/car/${carId}`); // Navigate to CarDetail with carId in the URL
      };
    
      return (
        <div>
          <h2>Search Results</h2>
          {filteredCars.length > 0 ? (
            <ul>
              {filteredCars.map(car => (
                <li key={car.id} onClick={() => handleCarClick(car.id)} style={{ cursor: 'pointer' }}>
                  <h3>{car.name}</h3>
                  <p>Location: {car.address}</p>
                  <p>Price: ${car.basePrice}</p>
                  <p>Description: {car.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No cars available for the selected location.</p>
          )}
        </div>
      );
    };
    

export default SearchResult