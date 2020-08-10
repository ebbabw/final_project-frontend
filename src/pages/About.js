import React, {useEffect, useState } from 'react'
import styled from 'styled-components/macro'

//Lib
import { Header } from '../lib/Header'

export const About = () => {
    
    const [info, setInfo] = useState([])


    useEffect(() => {

    fetch('https://ebba-final-project.herokuapp.com/facts')
    .then((res) => res.json())
    .then((json) => {
      setInfo(json)
    })
}, [])

    return (
      <div>

      <Header /> 

      <CompanyHeader>What we do</CompanyHeader>

      <FactsContainer>

            {info.map((info) => (

           <ItemBox>
           <HoverEffect>
           <InnerFlipedCard>

           <FlipcardFrontandBack>
           <FlipcardFront>

           <ItemText>{info.name}</ItemText>
           <Img src={info.image} alt={info.name}></Img>

           </FlipcardFront>
           </FlipcardFrontandBack>

           <FlipcardFrontandBack>
           <FlipcardBack>
           
           <TextInfo>{info.info}</TextInfo>

           </FlipcardBack>
           </FlipcardFrontandBack>
           
           
           </InnerFlipedCard>
           </HoverEffect>
           </ItemBox>

            ))}
          </FactsContainer>

      </div>

        )
    }

    const CompanyHeader = styled.h2`
  
    margin-top: 100px;
    font-size: 50px;
    text-transform: uppercase;
    color: black;
    text-align: center;
   
    @media (max-width: 768px) {
   
      font-size: 30px;
   
    }
   
    
   `;
   
  
const FactsContainer = styled.div`
  
  display: flex;
  justify-content: center;

  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;


  @media (max-width: 768px) {

    background-color: black;
    flex-direction: row;

  }
 
 `;

 const InnerFlipedCard = styled.div`
  
  position: relative;

  width: 400px;
  height: 400px;

  @media (max-width: 768px) {
    width: 350px;
    height: 250px;
  }
 
`;


const FlipcardFrontandBack = styled.div`
  
  position: absolute;
  width: 100%;
  height: 100%;


`;

const Img = styled.img`
  
  width: 100%;
  height: 100%;
  position: relative;
  

`;

const ItemText = styled.p`
  
  z-index: 50;
  text-align: center;
  top: 40%;
  left: 40%;
  position: absolute;
  font-size: 50px;
  text-transform: uppercase;

`;


const FlipcardFront = styled.div`
  
  background-color: black;
  color: white;
   
  width: 100%;
  height: 100%;

`;

const FlipcardBack = styled.div`
  
  position: relative; 
  transform: rotateY(180deg);
  background-color: black;
  color: white;
  display: none;
  
  width: 100%;
  height: 100%;


`;

const HoverEffect = styled.div`
 
&:hover {
  transform: rotateY(180deg);

${FlipcardFront} {
  display: none;
}

${FlipcardBack} {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
 
}

`;
 
const ItemBox = styled.div`
  
  width: 400px;
  height: 400px;
  margin: 20px;

`;

const TextInfo = styled.h2`
  
  color: black;
  color: white;
  font-size: 20px;
  margin: 20px;
  

`;



