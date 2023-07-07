import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import TextField from '../TextField';
import './Form.css'

const Form = ({ houses, whenNewSubmit, insertNewHouse }) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [image, setImage] = useState('')
    const [house, setHouse] = useState('')
    const [houseName, setHouseName] = useState('')
    const [houseColor, setHouseColor] = useState('')

    const onSave = (event) => {
        event.preventDefault();
        //console.log('Form foi submetido -> ', name, age, image, house)
        whenNewSubmit({
            name,
            age,
            image,
            house
        })
        setName('')
        setAge('')
        setImage('')
        setHouse('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Enter your witch data!</h2>
                <TextField 
                    required
                    label="Name" 
                    placeholder="Enter your name"
                    value={name}
                    whenChanged={value => setName(value)}
                />
                <TextField 
                    required
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
                    required
                    label="Select your house" 
                    items={houses} 
                    value={house}
                    whenChanged={value => setHouse(value)}
                />
                <Button> Submit </Button>
            </form>

            {/* Form 2*/}

            <form onSubmit={(event) => {
                event.preventDefault();
                insertNewHouse({name: houseName, color: houseColor})
            }}>
                <h2>Create a new house.</h2>
                <TextField 
                    required
                    label="Name" 
                    placeholder="House name"
                    value={houseName}
                    whenChanged={value => setHouseName(value)}
                />
                <TextField 
                    required 
                    label="Color" 
                    placeholder="House color"
                    value={houseColor}
                    whenChanged={value => setHouseColor(value)}
                />

                <Button> Create house </Button>
            </form>
        </section>
    )
}

export default Form;