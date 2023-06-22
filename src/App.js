import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import House from './components/House';
import Footer from './components/Footer';

function App() {

  const houses = [
    {
      name: 'Gryffindor',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Ravenclaw',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Slytherin',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Hufflepuff',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    }
  ];

  const [people, setPeople] = useState([]);

  const newPersonAdded = (person) => {
    //console.log(person);
    setPeople([...people, person]);
  };

  return (
    <div className="App">
      <Banner />
      <Form houses={houses.map(house => house.name)} whenNewSubmit={person => newPersonAdded(person)}/>     
      {houses.map(house => (
        <House
          key={house.name}
          name={house.name}
          primaryColor={house.primaryColor}
          secondaryColor={house.secondaryColor}
          people={people.filter(person => person.house === house.name)}
        />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
