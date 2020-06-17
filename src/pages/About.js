import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

//Lib
import { Header } from '../lib/Header'

export const About = () => {
    
    const [info, setInfo] = useState([])


    useEffect(() => {

    fetch('https://ebba-final-project.herokuapp.com/about')
    .then((res) => res.json())
    .then((json) => {
      setInfo(json)
    })
}, [])

    return (
        
        <div>

            < Header /> 
            
            <section>
            {info.map((info) => (
            
            <div>
            <p>{info.name}</p>
            <p>{info.info}</p>
            </div>

            ))}
            </section>

            <Link to="/"><button>Home</button></Link>
            </div>
    
        )
    }
    



