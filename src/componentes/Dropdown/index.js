import './Dropdown.css';

const Dropdown = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown;