import { waitForElementToBeRemoved } from '@testing-library/react';
import './TextField.css';

const TextField = (props) => {
    const modifiedPlaceholder = `${props.placeholder}...`;

    return (        
        <div className='text-field'>
            <label>
                {props.label}
            </label>
            <input required={props.required} placeholder={modifiedPlaceholder}/>
        </div>
    );
}

export default TextField;