import Button from '../Button';
import Dropdown from '../Dropdown';
import TextField from '../TextField';
import './Form.css'

{/* import SelectField from './componentes/TextField/SelectField'; */}

const Form = () => {
    const list = ['Griffindor', 
    'Ravenclaw', 
    'Slytherin', 
    'Hufflepuff'];

    const onSave = (event) => {
        event.preventDefault();
        console.log('Evento Prevenido')
    }



    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Enter your witch data!</h2>
                <TextField required={true} label="Name" placeholder="Enter your name"/>
                <TextField required={true} label="Age" placeholder="Enter your age"/>
                <TextField label="Image" placeholder="Add image address"/>
                <Dropdown required={true} label="Select your house" items={list} />
                <Button> Submit </Button>
            </form>
        </section>
    )
}

export default Form;