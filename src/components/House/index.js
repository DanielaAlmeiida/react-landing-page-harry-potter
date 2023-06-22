import Person from '../Person';
import './House.css'


const House = (props) => {
    return (
        (props.people.length > 0) ?
         <section className='house' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='people'>
                {props.people.map( person => 
                        <Person
                            primaryColor={props.primaryColor}
                            key={person.name}
                            name={person.name} 
                            house={person.house} 
                            image={person.image}
                        />
                    )}
            </div>               
        </section>
        : ''
        
    )
}

export default House;