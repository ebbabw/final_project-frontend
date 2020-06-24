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


        <PageContainer>

        <Img src='/assets/oceanturtle.jpg' alt='turtle' no-repeat center></Img>


        < Header /> 
            
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


           <FactsBox>
           <HeaderInfo>{info.name3}</HeaderInfo>
           <TextInfo>{info.info3}</TextInfo>
           </FactsBox>
           
    

          </div>
            ))}
            </FactsContainer>

        </PageContainer>

        )
    }

  const PageContainer = styled.div`
  
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

  `;


const Img = styled.img`
    
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;
  

 const FactsContainer = styled.div`
  
  display: flex;
  width: 100%;
  height: 400px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  z-index: 44;
 
`;


const FactsBox = styled.div`


  margin-top: 40px;
  margin-left: 40px;
  width: 50%;
  background-color: green;

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



