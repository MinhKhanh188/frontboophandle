
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CarList = () => {
    return (
        <div>
            <h1>Car List</h1>
            <div>
        {cars.length > 0 ? (
          cars.map((car) => (
            <div key={car.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
              <h3>{car.name}</h3>
              <p><strong>Brand:</strong> {car.brand}</p>
              <p><strong>Model:</strong> {car.model}</p>
              <p><strong>Number of Seats:</strong> {car.numberOfSeats}</p>
              <p><strong>Production Year:</strong> {car.productionYear}</p>
              <p><strong>Transmission Type:</strong> {car.transmissionType}</p>
              <p><strong>Fuel Type:</strong> {car.fuelType}</p>
              <p><strong>Mileage:</strong> {car.mileage}</p>
              <p><strong>Base Price:</strong> ${car.basePrice}</p>
              <p><strong>Deposit:</strong> ${car.deposit}</p>
              <p><strong>Address:</strong> {car.address}</p>
              <p><strong>Description:</strong> {car.description}</p>
              <p><strong>Additional Functions:</strong> {car.additionalFunctions}</p>
              <p><strong>Term of Use:</strong> {car.termOfUse}</p>
              <img src={`../assets/` + car.image + `.png`} alt={car.name} style={{ width: '200px' }} />
            </div>
          ))
        ) : (
          <p>No cars available.</p>
        )}
      </div>
        </div>
    )
}

export default CarList