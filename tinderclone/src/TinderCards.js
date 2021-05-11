import React,{useState, useEffect} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from './axios';  

function TinderCards() {
  const [people,setPeople]= useState([
    {
      "_id": "608fd206f6764c5288edf498",
      "name": "Elon Musk",
      "imgUrl": "https://th.bing.com/th/id/OIP.cU3tWOyoR0A_A9FMbv-L-wHaE7?w=279&h=186&c...",
      "__v": 0
  },
  {
      "_id": "608fd22ef6764c5288edf499",
      "name": "jeff bezos",
      "imgUrl": "https://th.bing.com/th/id/OIP.cU3tWOyoR0A_A9FMbv-L-wHaE7?w=279&h=186&c...",
      "__v": 0
  }
  ]);
//not working as err protocol
  useEffect(() => {
    async function fetchdata(){
      const req = await axios.get("/tinder/cards");

      setPeople(req.data);
    }
    fetchdata();
  }, []);

  console.log(people);
  const swiped=(direction,nameToDelete)=>{
    console.log("removing:"+nameToDelete);
    //setLastDirection(direction);
  };

  const outOfFrame=(name)=>{
    console.log(name+"left the screen");
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">

      {people.map((person)=>(
        
        <TinderCard
        className="swipe"
        key={person.name}
        preventSwipe={["up","down"]}
        onSwipe={(dir)=>swiped(dir,person.name)}
        onCardLeftScreen={()=>outOfFrame(person.name)}
        >
          <div className="card" style={{backgroundImage:`url(${person.imgUrl})`}}>
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
      </div>
    </div>
  )
}

export default TinderCards;
