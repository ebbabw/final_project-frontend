import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'


export const FullVideo = () => {

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
          <Button>Become a member</Button>
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

const Button = styled.button`

  width: 40%;
  padding: 20px;
  margin-top: 20px;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255);
  color: white;
  transition: all .2s ease-in-out;
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  &:hover {

    cursor: pointer;
    transform: scale(1.1);
    background-color: rgba(242, 192, 126);

  }
   
`;





