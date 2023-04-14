import './TextField.css';

const TextField = (props) => {
    const modifiedPlaceholder = `${props.placeholder}...`;

    return (        
        <div className='text-field'>
            <label>
                {props.label}
            </label>
            <input placeholder={modifiedPlaceholder}/>
        </div>
    );
}

export default TextField;