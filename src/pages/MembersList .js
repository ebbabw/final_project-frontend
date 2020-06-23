import React, {useEffect, useState } from 'react'

import styled from 'styled-components/macro'

//Lib
import { Header } from '../lib/Header'



export const MembersList = () => {
    
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
    text-align: center;

  `;


const MembersContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  width 100%;
  height: 300px;
  margin-top: 50px;
  justify-content: center;

`;

const Memberbox = styled.div`

   width: 80px;
   height: 80px;
   color: white;
   background-color: black;
   font-size: 20px;
   margin-left: 10px;
   text-align: center;


`
