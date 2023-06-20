import './House.css'

const House = (props) => {
    return (
        <section className='house' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        </section>
    )
}

export default House;