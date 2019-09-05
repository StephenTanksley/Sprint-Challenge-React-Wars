//I need React, I need styled, and I need { Card } from './Card';

import React from 'react'
import styled from 'styled-components'
import { Card } from './card'


const CardContainer = styled.div `
margin: 0 auto;
width: 80%;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`


//STEP 6 - I need to get the box I've created in the card.js out.
const CardDiv = (props) => {
    console.log('CardDiv', props)
    
    return (
        //STEP 7 - This is where I'm using my map.
        <CardContainer> {/*This is just the place where I'm getting to pass in value for my props.*/}
            {props.data && props.data.map((item, index) => {//Doesn't run the map function until we get data back from the API.
                    console.log(index)
                    return (
                    <Card person = {item}
                          key = {index}
                        />
                )
            })}

        </CardContainer>
    )
}

export default CardDiv