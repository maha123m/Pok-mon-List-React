import React from 'react';
import './App.css'; 
import './component/Login-Form/Login.css';  
import './component/Pokemon List/PokemonList.css'; 

import Login from './component/Login-Form/Login.js'; 
import PokemonList from './component/Pokemon List/PokemonList.js';
import welcomeImage from './welcome.png'; 
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const App = () => {
    const location = useLocation(); 

    return (
        <div className={location.pathname === '/' ? 'login-container' : 'pokemon-page'}>
            {location.pathname === '/' && ( 
                <div className="image-container">
                    <img src={welcomeImage} alt="Welcome" />
                </div>
            )}
            
            <Routes>
                <Route path="/" element={<LoginRedirect />} /> {}
                <Route path="/pokemon" element={<PokemonList />} /> {}
            </Routes>
        </div>
    );
};

// Component to handle redirection after successful login
const LoginRedirect = () => {
    const navigate = useNavigate();

    // Simulate login status check (you should replace this with actual login logic)
    const isLoggedIn = true; // Change this value based on your login logic

    if (isLoggedIn) {
        navigate('/pokemon');
    }

    return <Login />; 
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper; 
