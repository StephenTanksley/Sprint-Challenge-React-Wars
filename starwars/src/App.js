import React, { useEffect, useState } from 'react';
// import Container from './src/src/Card Element/card.js'
import styled from 'styled-components'
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState({}); //stateful variable. Should contain the response.data object so we have access to ALL the keys inside it.
  
  useEffect(() => {
    axios.get('https://swapi.co/api/people/?format=json')
      .then(response =>  {
        console.log(response.data.results);
        setData(response.data.results)
      })
      .catch(function(error) {
        console.log(error)
      });
  }, [{/*This is where I'd set my dependency if I want to update thise based on a new page of data*/}])
  

  //I want to add the ability to set up a card for each item in the array of objects.
  const addCard = (props) => {
    data.forEach() => {
      props.name = {data.name};
    }
  }

  const AppContainer = styled.div`
  
    width: 70%;
    margin: 0 auto;
    padding-top: 2.5rem;

  `;

  return (
    <AppContainer>
      <div className = "character-list">
        <h1>React Wars</h1>
        <CharacterCard 
            name = {data.name}
            gender = {data.gender}
            hairColor = {data.hair_color}
            height = {data.height}
            mass = {data.mass}
            homeworld = {data.homeworld}
          />
      </div> 
    </AppContainer>
  );
}

export default App;