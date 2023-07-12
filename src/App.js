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
      color: '#000a90'
    },
    {
      id: uuidv4(),
      name: 'Slytherin',
      color: '#0d6217'
    },
    {
      id: uuidv4(),
      name: 'Hufflepuff',
      color: '#eee117'
    }
  ]);

  const initial = [
    {
      id: uuidv4(),
      favorite: true,
      name: 'Harry Potter',
      age: 10,
      image: 'https://64.media.tumblr.com/6b80eb5451d75525bdc7b19ed87cf35d/e40b9ab6f2507136-ec/s500x750/7e8a6d36e96d08589471b0f4f7dae39e2eb935a6.png',
      house: houses[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Hermione Granger',
      age: 10,
      image: 'https://vignette3.wikia.nocookie.net/stexpanded/images/e/e1/HermioneHBPHi-resPromo3.jpg/revision/latest?cb=20090422183550',
      house: houses[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Ron Weasley',
      age: 10,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ron_Weasley_poster.jpg/220px-Ron_Weasley_poster.jpg',
      house: houses[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Luna Lovegood',
      age: 10,
      image: 'https://uvn-brightspot.s3.amazonaws.com/assets/vixpt/l/luna-lovegood-harry-potter_0.jpg',
      house: houses[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Murta Warren',
      age: 10,
      image: 'https://i0.wp.com/animagos.com.br/wp-content/uploads/2015/05/Murta-que-geme.jpg?fit=810%2C351&ssl=1',
      house: houses[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Sibila Trelawney',
      age: 10,
      image: 'https://arquivosdehogwarts.weebly.com/uploads/1/0/5/3/10531759/9045102.jpg',
      house: houses[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Severus Snape',
      age: 10,
      image: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/09/morreu-o-actor-de-professor-snape-em-harry-potter-1452784531876.jpg',
      house: houses[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Draco Malfoy',
      age: 10,
      image: 'https://pm1.aminoapps.com/7220/ebd19b69628f5f03fbf81f2005df52e801c5b516r1-306-471v2_00.jpg',
      house: houses[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Tom Riddle',
      age: 10,
      image: 'https://4.bp.blogspot.com/-VAEUlvs1aTM/VzpKTYelXxI/AAAAAAAASvE/NMI9lcMC1eAQBB-0Fb0ZCsHoIBlECDH7QCLcB/s1600/Tom%2BRiddle.jpg',
      house: houses[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Cedrico Diggory',
      age: 10,
      image: 'https://3.bp.blogspot.com/-oRwI55pbrxI/Tn4NQWghaTI/AAAAAAAAARw/FMPmHHEEcbg/s1600/Cedrico%2BDiggory.jpg',
      house: houses[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Ninfadora Tonks',
      age: 10,
      image: 'https://3.bp.blogspot.com/-gg3zCuHFlc4/TtuCNeVyGeI/AAAAAAAAAzA/VMMisvZYFH4/s1600/Ninfadora+Tonks.jpg',
      house: houses[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Newt Scamander',
      age: 10,
      image: 'https://2.bp.blogspot.com/-0UdGm00cpRw/WDURTjuJeWI/AAAAAAAAsI4/s4FF_yyYEicdXUJqQZjrX0nCpiV7-PEIQCPcB/s1600/fantastic_beasts_and_where_to_find_them_still_10.jpg',
      house: houses[3].name
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

  function manageFavorite(id) {
    setPeople(people.map((person) => {
      if(person.id === id) { 
        person.favorite = !person.favorite;       
      }
      return person
    }))
  }
  
  return (
    <div className="App">
      <Banner />
      <Form 
        houses={houses.map(house => house.name)} 
        whenNewSubmit={person => setPeople([...people, person])}
        insertNewHouse={insertNewHouse}
      /> 
      <section>
        <h1>Welcome to Hogwarts!</h1>
        {houses.map(house => (
          <House
            house={house}
            key={house.id}
            name={house.name}
            color={house.color}
            people={people.filter(person => person.house === house.name)}
            onDelete={deletePerson}
            changeColor={changeHouseColor}
            onFavorite={manageFavorite}
          />
        ))}
      </section>          
      <Footer/>
    </div>
  );
}

export default App;
