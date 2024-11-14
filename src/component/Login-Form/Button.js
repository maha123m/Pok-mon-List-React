import React from 'react';

const Button = ({ onClick, label }) => {
    return (
        <button
            onClick={onClick}
            style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
            }}
        >
            {label}
        </button>
    );
};

export default Button;
