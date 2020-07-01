import React, {useEffect, useState } from 'react'
import styled from 'styled-components/macro'

//Lib
import { Header } from '../lib/Header'

export const About = () => {
    
    const [info, setInfo] = useState([])


    useEffect(() => {

    fetch('https://ebba-final-project.herokuapp.com/about')
    .then((res) => res.json())
    .then((json) => {
      setInfo(json)
    })
}, [])

    return (
      <div>

      <Header /> 

      <FactsContainer>
      <CompanyHeader>What we do</CompanyHeader>
 
            {info.map((info) => (
              <div>

           <ItemBox>
           <ItemText>{info.name}</ItemText>
           <Img src={info.image} alt={info.name}></Img>
           <TextBox>
           <TextInfo>{info.info}</TextInfo>
           </TextBox>
           </ItemBox>

          </div>
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

    font-size: 30px;
    width: 100%;

  }
 
 `;
 
const ItemBox = styled.div`
  
  width: 400px;
  height: 800px;
  margin: 20px;

  @media (max-width: 768px) {

    width: 100%;
    height: 800px;

  }

`;

const ItemText = styled.p`
  
  text-transform: uppercase;
  color: black;
  text-align: center;
  font-size: 20px;
  font-weight: 700;

`;


const Img = styled.img`

  width: 400px;
  height: 400px;

  box-shadow: 
  0 1px 2px rgba(0,0,0,0.07), 
  0 2px 4px rgba(0,0,0,0.07), 
  0 4px 8px rgba(0,0,0,0.07), 
  0 8px 16px rgba(0,0,0,0.07),
  0 16px 32px rgba(0,0,0,0.07), 
  0 32px 64px rgba(0,0,0,0.07);
  
  margin: 5px;
  object-position: center center;
  obejct-fit: cover;
`;


const TextBox = styled.div`
  
  width: 400px;
  margin: 5px;

`;


const TextInfo = styled.h2`
  
  font-size: 20px;
  color: black;
  

`;



