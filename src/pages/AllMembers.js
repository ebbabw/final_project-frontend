import React, {useEffect, useState } from 'react'

import styled from 'styled-components/macro'

//Lib
import { Header } from '../lib/Header'


export const AllMembers = () => {
    
    const [member, setmember] = useState([])


    useEffect(() => {

    fetch('https://ebba-final-project.herokuapp.com/allmembers')
    .then((res) => res.json())
    .then((json) => {
      setmember(json)
    })
}, [])

    return (
        
        <div>

            < Header /> 
            
            <HeaderMembers>Our amazing members</HeaderMembers>

            <MembersContainer>

            {member.map((info) => (
       
            <Memberbox>
            <p>{info.name}</p>
            </Memberbox>

            ))}
            </MembersContainer>

        </div>
    
        )
    }

const HeaderMembers = styled.h1`
  
  margin-top: 100px;
  font-size: 50px;
  text-transform: uppercase;
  color: black;
  text-align: center;

  `;

const MembersContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

`;


const Memberbox = styled.div`

   width: 200px;
   height: 100px;
   color: white;
   background-color: black;
   font-size: 20px;
   text-align: center;
   margin: 10px;



`
