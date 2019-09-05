import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CardDiv from './src/src/Card Element/CardDiv.js'
import './App.css';

const NameHeader = styled.h1`
  font-size: 62.5%;
  font-size: 1.8rem;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
`


//STEP 2 - You know you have to use a .map function later, so setting up your effect as an arrow function makes sense.
const App = () => {
  //STEP 3 - Declare state to make sure we can import data dynamically.
  const [data, setData] = useState(false)//just gives us a blank boolean saying we don't have any data here.

  useEffect(() => {
    axios.get('https://swapi.co/api/people')
    .then(response => {
      setData(response.data.results)
      console.log(response.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])//need an empty dependency array to make sure that things don't keep updating every time.

  console.log(data) //This will show up twice. This is because it renders first before the API call is finished, then again after the API call is finished and has updated the value of data.
 
  return (

    <div className = "App">
      <NameHeader>REACT WARS</NameHeader>
      <CardDiv data = {data} /> 
    </div>
  )

}


export default App;