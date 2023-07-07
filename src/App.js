import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import House from './components/House';
import Footer from './components/Footer';
import { v4 as uuidv4} from 'uuid';

function App() {
  const [houses, setHouses] = useState([
    {
      id: uuidv4(),
      name: 'Gryffindor',
      color: '#FFC501'
    },
    {
      id: uuidv4(),
      name: 'Ravenclaw',
      color: 'rgba(0, 10, 144, .4)'
    },
    {
      id: uuidv4(),
      name: 'Slytherin',
      color: 'rgba(13, 98, 23, .3)'
    },
    {
      id: uuidv4(),
      name: 'Hufflepuff',
      color: 'rgba(238, 225, 23, .7)'
    }
  ]);

  const initial = [
    {
      id: uuidv4(),
      name: 'Harry Potter',
      age: 10,
      image: 'https://static.wikia.nocookie.net/neoencyclopedia/images/4/44/HarryPotter5poster.jpg/revision/latest?cb=20121121021021',
      house: houses[0].name
    },
    {
      id: uuidv4(),
      name: 'Hermione Granger',
      age: 10,
      image: 'https://vignette3.wikia.nocookie.net/stexpanded/images/e/e1/HermioneHBPHi-resPromo3.jpg/revision/latest?cb=20090422183550',
      house: houses[0].name
    },
  ];

  const [people, setPeople] = useState(initial);

  function deletePerson(id) {
    setPeople(people.filter(people => people.id !== id));
  }

  function changeHouseColor(color, id) {
    setHouses(houses.map(house => {
      if(house.id === id) {
        house.color = color;
      }
      return house;
    }));
  }

  function insertNewHouse(newHouse) {
    setHouses([...houses, { ...newHouse, id: uuidv4() }])
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        houses={houses.map(house => house.name)} 
        whenNewSubmit={person => setPeople([...people, person])}
        insertNewHouse={insertNewHouse}
      />     
      {houses.map(house => (
        <House
          house={house}
          key={house.id}
          name={house.name}
          color={house.color}
          people={people.filter(person => person.house === house.name)}
          onDelete={deletePerson}
          changeColor={changeHouseColor}
        />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
