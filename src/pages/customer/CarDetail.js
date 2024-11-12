// src/pages/customer/CarDetail.js

import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";

const CarDetail = () => {
    const { cars } = useContext(AppContext);
    const { carId } = useParams(); // Retrieve carId from the URL

    const car = cars.find((car) => String(car.id) === String(carId)); // Find the car by ID

    if (!car) return <p>Car not found.</p>;

    return (
        <div>
            <h1>Car Detail</h1>
            <h2>{car.name}</h2>
            <p>Brand: {car.brand}</p>
            <p>Model: {car.model}</p>
            <p>Seats: {car.numberOfSeats}</p>
            <p>Year: {car.productionYear}</p>
            <p>Transmission: {car.transmissionType}</p>
            <p>Fuel: {car.fuelType}</p>
            <p>Mileage: {car.mileage}</p>
            <p>Price: ${car.basePrice}</p>
            <p>Deposit: ${car.deposit}</p>
            <p>Description: {car.description}</p>
            <p>Additional Functions: {car.additionalFunctions}</p>
            <p>Term of Use: {car.termOfUse}</p>
            <img src={`../assets/carsImage/` + car.image + `.png`} alt={car.name} style={{ width: '200px' }} />
        </div>
    );
};


export default CarDetail