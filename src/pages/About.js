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

            < Header /> 
            
            <FactsContainer>
            {info.map((info) => (
            
            <FactsBox>
            <p>{info.name}</p>
            <p>{info.info}</p>
            </FactsBox>

            ))}
            </FactsContainer>

        </div>
    
        )
    }
    


 const FactsContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 100px;
 
`;


const FactsBox = styled.div`
  
  width: 400px;
  height: 400px;

`;


