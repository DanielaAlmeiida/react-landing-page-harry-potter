import Person from '../Person';
import './House.css'


const House = (props, onDelete) => {
    return (
        (props.people.length > 0) ?
         <section className='house' style={{ backgroundColor: props.secondaryColor }}>      
            <input value={props.primaryColor} type='color' className='input-color'></input>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='people'>
                {props.people.map( person =>{              
                    return <Person
                        primaryColor={props.primaryColor}
                        key={person.name}
                        name={person.name} 
                        house={person.house} 
                        image={person.image}
                        onDelete={onDelete}
                    />
                })}
            </div>               
        </section>
        : ''
        
    )
}

export default House;