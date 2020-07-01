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
        
        {isLoading && (
        <div>
        <Lottie 
        options={defaultOptions} 
        height={300} 
        width={300}
        />
        <p>Loading...</p>
        </div>
       )}
       </LoadingContainer>

    </>

    )}


const LoadingContainer = styled.div`

  margin-top: 40px;
  justify-content: center;
  width: 100%;
`








