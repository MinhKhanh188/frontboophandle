// src/components/LocationSearch.js
import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const LocationSearch = () => {
    const { rentallocations, setSelectedLocationId } = useContext(AppContext);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const input = e.target.value;
        setQuery(input);

        if (input.length > 0) {
            const filteredSuggestions = rentallocations.filter((location) =>
                location.local.toLowerCase().includes(input.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.local);
        setSuggestions([]);
        setSelectedLocationId(suggestion.id); // Set selected location ID
        console.log("Selected Location ID:", suggestion.id); // Check if it logs the ID
    };
    

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Enter location"
                    value={query}
                    onChange={handleInputChange}
                />
                {suggestions.length > 0 && (
                    <ul style={{ border: "1px solid #ccc", padding: "5px" }}>
                        {suggestions.map((suggestion) => (
                            <li
                                key={suggestion.id}
                                onClick={() => handleSuggestionClick(suggestion)}
                                style={{ cursor: "pointer", padding: "5px 0" }}
                            >
                                {suggestion.local}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div>
                <h1>PICK UP DATA AND TIME</h1>
                <input type="date" />
                <input type="time" />

                <h1>DROP OFF DATA AND TIME</h1>
                <input type="date" />
                <input type="time" />
            </div>
            <button>Search</button>
        </div>
    );
};

export default LocationSearch;
