import React from 'react'
import Menu from '../Menu'
import './styles.css'

const Home = () => (
  <div className='cover'>
    <Menu />
    <div className='data'>
      <figure>
        <img src='https://i.imgur.com/KZemkVo.png' alt='Logo de UDG Virtual' />
      </figure>
      <h1>Producto integrador</h1>
      <h4>Luis Arturo Lira Cerda</h4>
      <p>Proyecto II</p>
      <p>211762638</p>
    </div>
    <p>
      <a
        href='https://github.com/LuisLiraC/ProductoIntegrador'
        target='_blank'
        rel='noopener noreferrer'
      >
        Repositorio de este proyecto
      </a>
    </p>
  </div>
)

export default Home
