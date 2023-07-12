import './Person.css'
import { AiFillCloseCircle,  AiOutlineHeart } from 'react-icons/ai'
import { PiHeartStraightFill,  PiHeartStraight } from 'react-icons/pi'

const Person = ({ person, house, color, onDelete, onFavorite}) => {
    function favorite() {
        onFavorite(person.id);
    }

    const propsFavorite = {
        size: 25,
        onClick: favorite
    }

    return (
    <div className='person'>
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
            <div>
                {person.favorite 
                    ? <PiHeartStraightFill {...propsFavorite} color='#ff0000'/>
                    : <PiHeartStraight {...propsFavorite}/>
                }
            </div>
        </div>

    </div>
    )
}

export default Person;