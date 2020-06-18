import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'

import { Button } from '../lib/Button'


export const FullVideo = props => {

   return (
    <div>

      <Texture></Texture>
     
      <VideoContiner>
      
      <Video autoPlay playsInline muted loop>
      <source src='/assets/ocean.mp4' type="video/mp4" />
      </Video>

      
        <CaptionContiner>
          
          <h1>Help us save our oceans</h1>
          
          <Link to="/memberform">
          <OutlinedButton>{props.buttonMessage}</OutlinedButton>
          </Link>
          
          </CaptionContiner >


      </VideoContiner>

      </div>
   );
 };

 const Texture = styled.img`

  width: 100%;
  height: 100%;
  position: absolute;
  top 0;
  left: 0;
  z-index: 15;
  background-image: url('/assets/texture.png');
    
`;

 const VideoContiner = styled.div`
  
   width: 100%;
   height: 100vh;
   background-color: gray;
   display: flex;
   align-items: center;
   justify-content: center;

    &::after {
    width: 100%;
    height 100%;
    content:'';
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3); 
   }
`;

const Video = styled.video`

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0:
  left: 0:
  z-index: 5;
  object-fit: cover;
  
`;

const CaptionContiner = styled.div`

  position: relative;
  z-index: 20;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 20px;
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
   
  
`;

const OutlinedButton = styled(Button)`
  width: 200px;
  color: #6200ee;
  background: ${props => props.background || "white"};
  border: 2px solid #6200ee;

  &:hover {
    background: ${props => props.background || "#f5eeff"};
  }
`;





