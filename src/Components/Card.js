import React, { useState } from 'react'
import './Card.css'

function Card(){

    const [name, setName] = useState('Gerardo Moreno Souffle');
    const [job,setJob] = useState('Ilustrador | Artista Conceptual');
    const [about,setAbout] = useState('Estudiante de la Ing. Diseño Gráfico Digital en la Universidad Kino. Con bastante experiencia en ilustración, he decidido empezar a aprender sobre arte conceptual, cómo se utiliza y para qué, además de seguir aprendiendo sobre Diseño Gráfico en general.')

    return(
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src="/profile.jpg" alt= "profile" height= "100px" width= "100px"/>
                </div>
            </div>
            <div className='lower-container'>
                <h3> {name} </h3>
                <h4> {job} </h4>
                <p> {about} </p>
                <button> Visitar Perfil </button>
            </div>

        </div>
    )
}

export default Card