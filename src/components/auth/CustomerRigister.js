// src/components/auth/CustomerRigister.js
import React, { useState } from 'react';
import axios from 'axios';

const CustomerRigister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        // Basic validation
        if (!name || !email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            const newUser = {
                name,
                email,
                password
            };

            // Post new user data to JSON server
            const response = await axios.post("http://localhost:9999/users", newUser);
            if (response.status === 201) {
                setSuccess("Registration successful! You can now log in.");
                setName("");
                setEmail("");
                setPassword("");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <h1>Customer Registration</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default CustomerRigister;
