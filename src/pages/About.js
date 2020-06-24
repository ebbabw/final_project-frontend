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
        
        <PageContainer>
            
            <FactsContainer>
            {info.map((info) => (
          
          <div>
            <FactsBox>
            <HeaderInfo>{info.name1}</HeaderInfo>
            <TextInfo>{info.info1}</TextInfo>
            </FactsBox>

           <FactsBox>
           <HeaderInfo>{info.name2}</HeaderInfo>
           <TextInfo>{info.info2}</TextInfo>
           </FactsBox>

          </div>
            ))}
            </FactsContainer>

        </PageContainer>
    
        </div>
        )
    }

  const PageContainer = styled.div`
  
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background: url('/assets/oceanturtle.jpg') no-repeat center;
   background-size: cover;

   
  `;
  

 const FactsContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 400px;
 
`;


const FactsBox = styled.div`
  
  width: 500px;
  height: 500px;

`;

const HeaderInfo = styled.h2`
  
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  

`;

const TextInfo = styled.h2`
  
  font-size: 20px;
  color: white;
  

`;



