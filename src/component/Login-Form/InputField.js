import React from 'react';

const InputField = ({ type, placeholder, value, onChange }) => {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                style={{ width: '100%', padding: '5px', borderRadius: '6px', border: '2px solid #ccc' }}
            />
        </div>
    );
};

export default InputField;
