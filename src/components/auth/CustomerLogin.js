// src/components/auth/UserLogin.js
import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CustomerLogin = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    // Simulate the session timeout reset function
    const resetSessionTimeout = useCallback(() => {
        console.log("Session timeout reset.");
    }, []);

    const login = useCallback(async (email, password) => {
        try {
            const response = await axios.get(`http://localhost:9999/users`);
            const user = response.data.find(user => user.email === email && user.password === password);
            
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                resetSessionTimeout();
                return user;
            }
            
            setError("Invalid email or password.");
            return null;
        } catch (error) {
            console.error("Error during login:", error);
            setError("An error occurred during login. Please try again.");
            return null;
        }
    }, [resetSessionTimeout]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        const user = await login(email, password);
        
        if (user) {
            navigate("/dashboard");
        }
    };

    return (
        <div>
            D1p4R@example.com
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default CustomerLogin;
