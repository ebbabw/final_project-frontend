import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'

import { Button } from '../lib/Button'
import { LogoHome } from '../lib/Logos'


export const FullVideo = props => {

   return (
    <PageContainer>

      <Texture></Texture>
     
      <VideoContiner>
      
      <Video autoPlay playsInline muted loop>
      <source src='/assets/ocean.mp4' type="video/mp4" />
      </Video>

      
        <CaptionContiner>

          <LogoHome src='/assets/logocwg.png'></LogoHome>

          <h2>Help us save our oceans from plastic waste</h2>
          
          <Link to="/memberform">
          <OutlinedButton>{props.buttonMessage}</OutlinedButton>
          </Link>
          
          </CaptionContiner >


      </VideoContiner>

      </PageContainer>
   );
 };


 const PageContainer = styled.div`

  width: 100%;
  height: 100%;
  background-color: red;
  
    
`;
 

 const Texture = styled.img`

  width: 100%;
  height: 100vh;
  position: absolute;
  top 0;
  left: 0;
  z-index: 15;
  background-image: url('/assets/texture.png');
    
`;

 const VideoContiner = styled.div`
  
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: red;

    &::after {
      width: 100%;
      height 100vh;
      content:'';
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.2); 
      background-size: cover;
   }
`;

const Video = styled.video`
    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
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
  color: black;
  background: ${props => props.background || "white"};
  border: 2px solid black;

  &:hover {
    background: ${props => props.background || "lightblue"};
  }
`;





