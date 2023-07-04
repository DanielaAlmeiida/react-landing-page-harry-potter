import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import House from './components/House';
import Footer from './components/Footer';

function App() {

  const houses = [
    {
      name: 'Gryffindor',
      primaryColor: 'rgba(255, 197, 0, .9)',
      secondaryColor: 'rgba(127, 9, 9, .6)'
    },
    {
      name: 'Ravenclaw',
      primaryColor: '#946B2D',
      secondaryColor: 'rgba(0, 10, 144, .4)'
    },
    {
      name: 'Slytherin',
      primaryColor: '#AAAAAA',
      secondaryColor: 'rgba(13, 98, 23, .3)'
    },
    {
      name: 'Hufflepuff',
      primaryColor: '#000000',
      secondaryColor: 'rgba(238, 225, 23, .7)'
    }
  ];

  const [people, setPeople] = useState([]);

  const newPersonAdded = (person) => {
    //console.log(person);
    //debugger
    setPeople([...people, person]);
  };


  function deletePerson() {

  }


  return (
    <div className="App">
      <Banner />
      <Form 
        houses={houses.map(house => house.name)} 
        whenNewSubmit={person => newPersonAdded(person)}
      />     
      {houses.map(house => (
        <House
          key={house.name}
          name={house.name}
          primaryColor={house.primaryColor}
          secondaryColor={house.secondaryColor}
          people={people.filter(person => person.house === house.name)}
          onDelete={deletePerson}
        />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
