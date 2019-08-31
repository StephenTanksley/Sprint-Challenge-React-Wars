import React from "react";
import styled from 'styled-components'

const Container = styled.div`

    font-size: 62.5%;
    display: flex;
    flex-direction: column;
    width: 60%;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    color: white;
    
`;

function Card(props) {
    return (
    <Container>
        <h2 className = 'header'>Some Data</h2>
        <h3 className = 'copyright'>Some Other Data</h3>
        <p className = 'explanation-text'>Some DataFinal</p>
    </Container>
    );
}



export default Card;