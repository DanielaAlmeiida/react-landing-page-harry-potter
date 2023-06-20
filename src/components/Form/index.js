import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import TextField from '../TextField';
import './Form.css'

{/* import SelectField from './componentes/TextField/SelectField'; */}

const Form = (props) => {

    const list = [
        'Griffindor', 
        'Ravenclaw', 
        'Slytherin', 
        'Hufflepuff'
    ];

    const onSave = (event) => {
        event.preventDefault();
        console.log('Event prevented.')
        console.log('Form foi submetido -> ', name, age, image, house)
        props.whenNewSubmit({
            name,
            age,
            image,
            house
        })
    }

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [image, setImage] = useState('')
    const [house, setHouse] = useState('')

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Enter your witch data!</h2>
                <TextField 
                    required={true} 
                    label="Name" 
                    placeholder="Enter your name"
                    value={name}
                    whenChanged={value => setName(value)}
                />
                <TextField 
                    required={true} 
                    label="Age" 
                    placeholder="Enter your age"
                    value={age}
                    whenChanged={value => setAge(value)}
                />
                <TextField 
                    label="Image" 
                    placeholder="Add image address"
                    value={image}
                    whenChanged={value => setImage(value)}
                />
                <Dropdown 
                    required={true} 
                    label="Select your house" 
                    items={list} 
                    value={house}
                    whenChanged={value => setHouse(value)}
                />
                <Button> Submit </Button>
            </form>
        </section>
    )
}

export default Form;