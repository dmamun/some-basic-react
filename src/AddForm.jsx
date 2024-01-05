

import React, { useState } from 'react';

const AddForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState([]);

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue('');
        setDisplayValue([...displayValue, inputValue]);
    };

    const handleDelete = (item) => {
        const updatedDisplayValue = [...displayValue];
        updatedDisplayValue.splice(item, 1); // Remove the item at the given index
        setDisplayValue(updatedDisplayValue);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleOnChange}
                    placeholder="enter name"
                    required
                />
                <button>Submit</button>
            </form>
            {displayValue.map((item) => (
                <div key={item}>
                    <span>{item}</span>
                    <button onClick={() => handleDelete(item)}>delete</button>
                </div>
            ))}
        </div>
    );
};

export default AddForm;

