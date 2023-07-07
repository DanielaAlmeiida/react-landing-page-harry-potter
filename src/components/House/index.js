import Person from '../Person';
import './House.css'
import hexToRgba from 'hex-to-rgba';

const House = ({ house, people, onDelete, changeColor}) => {
    return (
        (people.length > 0) ?
         <section className='house' style={{ backgroundColor: hexToRgba(house.color, '0.6') }}>      
            <input value={house.color} type='color' className='input-color' onChange={event => {
                    changeColor(event.target.value, house.id);
            }} />
            <h3 style={{ borderColor: house.color }}>{house.name}</h3>
            <div className='people' >
                {people.map((person) => {              
                    return <Person
                        key={person.id} // Adicione a propriedade key aqui
                        color={house.color}
                        person={person}
                        house={house.name}
                        onDelete={onDelete}
                        changeColor={changeColor}
                    />
                })}
            </div>               
        </section>
        : ''
        
    )
}

export default House;