import { waitForElementToBeRemoved } from '@testing-library/react';
import { useState } from 'react'
import './Field.css';

const Field = ({ type='text', label, value, placeholder, whenChanged, required }) => {
    const modifiedPlaceholder = `${placeholder}...`;

    const whenTyped = (event) => {
        whenChanged(event.target.value)
    }

    return (        
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input 
                type={type}
                onChange={whenTyped} 
                value={value}           
                required={required} 
                placeholder={modifiedPlaceholder}/>
        </div>
    )
}

export default Field