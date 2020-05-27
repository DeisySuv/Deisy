import React from 'react'
import Menu from '../Menu'
import RepoAdrian from '../../assets/RepoAdrian.png'
import RepoJose from '../../assets/RepoJose.png'
import './styles.css'

const Unidad4 = () => (
  <div className='container'>
    <Menu />
    <div className='content'>
      <h1>Unidad 4</h1>
      <p>
        En esta unidad nos enfocamos en trabajar los proyectos de los otros dos
        integrantes del equipo, principalmente sólo nos enfocamos en mejorar el
        product backlog de cada uno de ellos, definir y crear una mejor
        planeación de los sprints, crear historias de usuarios y activadades que
        fueran más fáciles de entender para los desarrolladores del equipo y
        complementarlas con comentarios que pudieran ser útiles como guía para
        percatarnos si la historia se completó como se esperaba.
      </p>
      <p>
        <a
          href='https://github.com/josemagutierrez/Sprin-Planing'
          target='_blank'
          rel='noopener noreferrer'
        >
          Repositorio del Sprint Planning de José Gutiérrez
        </a>
      </p>
      <img src={RepoJose} alt='Repositorio José' className='repo' />
      <p>
        <a
          href='https://github.com/adosva/sprintplanning'
          target='_blank'
          rel='noopener noreferrer'
        >
          Repositorio del Sprint Planning de Adrián González
        </a>
      </p>
      <img src={RepoAdrian} alt='Repositorio Adrián' className='repo' />
    </div>
  </div>
)

export default Unidad4
