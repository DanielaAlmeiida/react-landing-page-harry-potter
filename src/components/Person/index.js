import './Person.css'

const Person = ({name, house, image, primaryColor}) => {
    return <div className='person'>

        <div className='header' style={{ backgroundColor: primaryColor}}>
            <img src={image} alt={name}></img>
        </div>
        
        <div className='footer'>
            <h4>{name}</h4>
            <h5>{house}</h5>
        </div>

    </div>
}

export default Person;