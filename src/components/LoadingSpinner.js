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
       <LoadingIcon> 
        {isLoading && (
        <Lottie 
        options={defaultOptions} 
        height={400} 
        width={400}
        />
       )}
       </LoadingIcon>

    </>

    )}


    

const LoadingIcon = styled.div`
display: flex;
width: 100%;
justify-content: center;
position: absolute;
padding: 1em;
z-index: 60;
`



