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
     <h2>Have some data</h2>
    </Container>
    );
}



export default Card;





// function ImageCard(props) {
//     const type = () => {
//         if (props.mediaType === 'image'){
//             return (
//                 <div className = 'image-card'>
//                     <img src={props.url}></img> 
//                 </div>
//                 );
//         } 