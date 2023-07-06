import './Person.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Person = ({ person, house, color, onDelete}) => {
    return <div className='person'>
        <AiFillCloseCircle 
            size={25} 
            className='delete' 
            onClick={() => onDelete(person.id)}
        />

        <div className='header' style={{ backgroundColor: color}}>
            <img src={person.image} alt={person.name}></img>
        </div>
        
        <div className='footer'>
            <h4>{person.name}</h4>
            <h5>{house}</h5>
        </div>

    </div>
}

export default Person;