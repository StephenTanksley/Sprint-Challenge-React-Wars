import React, { useEffect, useState } from 'react';
import Card from './src/src/Card Element/card.js'
import styled from 'styled-components'
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState([{}]); //stateful variable. Should contain the response.data object so we have access to ALL the keys inside it.
  
  useEffect(() => {
    axios.get('https://swapi.co/api/people/?format=json')
      .then(response =>  {
        console.log(response.data.results);
        setData(response.data.results)
      })
      .catch(function(error) {
        console.log(error)
      });
  }, [])

  console.log(data) 
  


  const AppContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin: 0 auto;
    padding-top: 2.5rem;

  `;

  const PageHeader = styled.h1`
    display: flex;
    margin: 0 auto;
    padding-top: 1rem;
    justify-content: center;
    align-items: center;
  `;

  return (
    <AppContainer>
      <div className = "character-list">
        <PageHeader>React Wars</PageHeader>
       {data.map((props) => {

       }}

      </div> 
    </AppContainer>
  );
}

export default App;


response.data => data.name
                  data.homeworld
                  data.mass