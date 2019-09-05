//STEP 5 - In this step, I'm creating a place for my items to live. 

import React from "react";
import styled from 'styled-components'


//Container is a place for all other elements to go.
const Container = styled.div`

    font-size: 62.5%;
    display: flex;
    flex-direction: column;
    width: 17rem;
    justify-content: space-around;
    align-items: center;
    
    border: .2rem solid white
    margin: 2rem;
    border-radius: 1rem;
    padding: .5rem;
    background-color: black;
`;

const ListHeading = styled.ul`

    list-style-type: none;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    margin: 0 auto;
    border: 0;
    padding: 0;
`

const List = styled.p `
    list-style-type: none;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    border: 0;
    padding: 0;
    color: white;
    font-size: 1.2rem;
    line-height: 1.5rem;

`
const Name = styled.h2 `
    font-size: 1.4rem;
    color: white;
`

export function Card(props) {
    // console.log(props)
    const person = props.person
    console.log(person)
    return (
        <Container>
            <Name>{person.name}</Name>
                <ListHeading>
                    <List>Date of birth: {person.birth_year}</List>
                    <List>Gender: {person.gender === 'n/a' ? "No gender" : person.gender }</List>
                    <List>Eye Color: {person.eye_color === 'n/a' ? "No eye color" : person.eye_color }</List>
                    <List>Hair Color: {person.hair_color === 'n/a' ? "No hair color" : person.hair_color }</List>
                    <List>Height: {person.height}cm</List>
                    <List>Mass: {person.mass}kg</List>
                </ListHeading>
        </Container>
    )
}
