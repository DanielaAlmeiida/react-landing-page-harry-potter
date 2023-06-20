import { waitForElementToBeRemoved } from '@testing-library/react';
import { useState } from 'react';
import './TextField.css';




const TextField = (props) => {
    const modifiedPlaceholder = `${props.placeholder}...`;

    const whenTyped = (event) => {
        props.whenChanged(event.target.value)
    }

    return (        
        <div className='text-field'>
            <label>
                {props.label}
            </label>
            <input 
                onChange={whenTyped} 
                value={props.value}           
                required={props.required} 
                placeholder={modifiedPlaceholder}/>
        </div>
    );
}

export default TextField;