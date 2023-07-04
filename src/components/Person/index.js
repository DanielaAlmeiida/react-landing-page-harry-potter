import './Person.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Person = ({name, house, image, primaryColor, onDelete}) => {
    return <div className='person'>
        <AiFillCloseCircle size={25} className='delete' onClick={onDelete}/>

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