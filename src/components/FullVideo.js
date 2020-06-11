import React from 'react'
import styled from 'styled-components/macro'



export const FullVideo = () => {

   return (
     
      <Video autoPlay playsInline muted loop>
      <source src={require('../assets/video1.mp4')} type="video/mp4" />
      </Video>

   );
 };


const Video = styled.video`

  overflow: hidden;
  width: 100%;
  height: auto;
  
    
`;


