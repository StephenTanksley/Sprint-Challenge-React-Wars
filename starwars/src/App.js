import React, { useEffect, useState } from 'react';
import Container from './src/src/Card Element/card.js'
import styled from 'styled-components'
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState({}); //stateful variable. Should contain the response.data object so we have access to ALL the keys inside it.
  
  useEffect(() => {
    axios.get('https://swapi.co/api/?format=json')
      .then(response =>  {
        console.log(response.data);
        setData(response.data)
      })
      .catch(function(error) {
        console.log(error)
      });
  }, [])
  
  const AppContainer = styled.div`
  
    width: 70%;
    margin: 0 auto;
    padding-top: 2.5rem;

  `;


  return (
    <AppContainer>
      <Container>

      </Container>
    </AppContainer>
  );
}

export default App;