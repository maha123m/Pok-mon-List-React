import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import InputField from './InputField';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault(); 

        let hasError = false;
        const staticUsername = 'maha@gmail.com';
        const staticPassword = '123';

        setUsernameError('');
        setPasswordError('');

        if (!username) {
            setUsernameError('this field is required'); 
            hasError = true;
        } else if (username !== staticUsername) {
            setUsernameError('this username is not correct'); 
            hasError = true;
        }
        if (!password) {
            setPasswordError('this field is required'); 
            hasError = true;
        } else if (password !== staticPassword) {
            setPasswordError('this password is incorrect'); 
            hasError = true;
        }

        if (!hasError) {
            navigate('/pokemon');
            
        }
    };

    return (
        <div className="form-container">
            <h1>Login Form</h1>
            <form id="loginForm" onSubmit={handleSubmit} noValidate>
                <label htmlFor="username">Username*</label>
                <InputField
                    type="text"
                    id="username"
                    placeholder="Enter Your Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                {usernameError && <p className="alert">{usernameError}</p>}

                <label htmlFor="password">Password*</label>
                <InputField
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {passwordError && <p className="alert">{passwordError}</p>}

                <Button type="submit" label="Login"/>
            </form>
        </div>
    );
};

export default Login;
