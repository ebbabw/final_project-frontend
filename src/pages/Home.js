import React from 'react'

//components
import { FullVideo } from '../components/Fullvideo'

//lib
import { Header } from 'lib/Header'

export const Home = () => {
   

    return (
    
    <div>

       <Header /> 

       <FullVideo 

       buttonMessage="Become a Member"

       />

       
    </div>

    )
}
