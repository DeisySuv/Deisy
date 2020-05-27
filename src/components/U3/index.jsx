import React from 'react'
import Menu from '../Menu'
import './styles.css'

const Unidad3 = () => (
  <div className='container'>
    <Menu />
    <div className='content'>
      <h1>Unidad 3</h1>
      <p>
        En esta unidad comenzamos a trabajar en equipo y primero decidimos el
        proyecto a realizar de alguno de los tres integrantes, para mi caso
        particular, el proyecto elegido fue el mío.
      </p>
      <p>
        Este proyecto constaba de realizar un servicio de backend de una API
        Rest en el primer sprint. Dicho servicio fue sobre el videojuego de
        League of Legends, para posteriormente lanzarlo como una API pública que
        otros estudiantes puedan usar para practicar tareas de frontend.
      </p>
      <p>
        Desarrollamos solamente el primer sprint que estaba marcado dentro del
        sprint schedule, el cual consistía en la recopilación de información de
        personajes del videojuego por medio de un web scraper y la creación de
        peticiones Get para uno y todos los personajes de la base de datos.
      </p>
      <p>
        Como evidencia del funcionamiento del entregable, al final de sprint se
        grabó un vídeo usando la herramienta de Postman para probar el servicio
        y probando el Web Scraper.
      </p>
      <p>
        <a
          href='https://github.com/LuisLiraC/proyecto-api'
          target='_blank'
          rel='noopener noreferrer'
        >
          Repositorio del proyecto
        </a>
      </p>
      <p>
        <a
          href='https://github.com/LuisLiraC/web-scraper-lol'
          target='_blank'
          rel='noopener noreferrer'
        >
          Repositorio del web scraper
        </a>
      </p>
      <p><b>Vídeo:</b></p>
      <iframe
        width='853'
        height='505'
        src='https://www.youtube.com/embed/y6D3pJna8Wg'
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Proyecto API'
      ></iframe>
    </div>
  </div>
)

export default Unidad3
