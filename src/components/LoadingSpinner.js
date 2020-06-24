import React from 'react'
import { useSelector } from 'react-redux'
import Lottie from 'lottie-react-web';
import animationData from '../lotties/loading-spinner';
import styled from 'styled-components/macro'


export const LoadingSpinner = () => {

  const isLoading = useSelector((state) => state.ui.isLoading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
  };

    return (

      <>
       <LoadingContainer> 
        
        <LoadingIcon>
        {isLoading && (
        <div>
        <Lottie 
        options={defaultOptions} 
        height={400} 
        width={400}
        />
         <p>Loading...</p>
        </div>
       )}

       </LoadingIcon>
       </LoadingContainer>

    </>

    )}


    

const LoadingContainer = styled.div`

  // display: flex;
  // align-items: flex-start;
  // justify-content: center;
  width: 100%;
  // position: absolute;
  z-index: 60;

  position: fixed;
  top:  20%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const LoadingIcon = styled.div`

  width: 40px;
  height: 40px;

`







