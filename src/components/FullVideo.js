import React from 'react'
import styled from 'styled-components/macro'



export const FullVideo = () => {

   return (
    <div>
     
      <VideoContiner>
      
      <Video autoPlay playsInline muted loop>
      <source src={require('../assets/ocean.mp4')} type="video/mp4" />
      </Video>

      
        <CaptionContiner>
          
          <h1>Help us save our oceans</h1>
          <Button>Become a member</Button>
          
          </CaptionContiner >


      </VideoContiner>

      </div>
   );
 };

 const VideoContiner = styled.div`

   height: 100vh;
   width: 100%;
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
    background: rgba(0, 0, 0, 0.5); 
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
   
  
`;

const Button = styled.button`

   position: relative;
   z-index: 20;
   
  
`;





