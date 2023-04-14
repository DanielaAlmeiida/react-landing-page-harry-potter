import Button from '../Button';
import Dropdown from '../Dropdown';
import TextField from '../TextField';
import './Form.css'

{/* import SelectField from './componentes/TextField/SelectField'; */}

const Form = () => {
    const list = ['Griffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];

    return (
        <section className='form'>
            <form>
                <h2>Enter your witch data!</h2>
                <TextField label="Name" placeholder="Enter your name"/>
                <TextField label="Age" placeholder="Enter your age"/>
                <TextField label="Image" placeholder="Add image address"/>
                <Dropdown label="Select your house" items={list} />
                <Button text="Submit" />
            </form>
        </section>
    )
}

export default Form;