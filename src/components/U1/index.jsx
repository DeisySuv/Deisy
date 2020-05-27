import React from 'react'
import Menu from '../Menu'
import Infografia from '../../assets/Infografia_Scrum.png'
import './styles.css'

const Unidad1 = () => (
  <div className='container'>
    <Menu />
    <div className='content'>
      <h1>Unidad 1</h1>
      <p>
        En esta unidad comenzamos a conocer la metodología SCRUM, la cual es:
      </p>
      <q>
        Un marco de trabajo con el que las personas pueden abordar problemas que
        podrían ir cambiando a través del tiempo del desarrollo del proyecto, y
        para entregar productos de máximo valor posible, de la mejor manera
        productiva y creativamente
      </q>
      <p>
        <b>¿Por qué deberíamos usar SCRUM?</b>
      </p>
      <ul>
        <li>
          Nos brinda una forma eficiente para organizar los roles, tareas y
          tiempos al momento de desarrollar un proyecto.
        </li>
        <li>
          Nos permite ser flexibles, multifuncionales y este genera un ambiente
          de mejora continua.
        </li>
        <li>
          Es ideal para trabajar sobre proyectos que pueden cambiar en el tiempo
          y para adaptarnos a las necesidades de este.
        </li>
        <li>
          Está enfocado a la calidad y productividad, por lo que nuestro equipo
          será mejor y entregaremos un mejor producto.
        </li>
      </ul>
      <p>
        También, aprendimos a redactar nuestro primer Product backlog, Fichas
        del backlog y Calendarización de los sprints.
      </p>
      <img src={Infografia} id='infografia' alt='infografía' />
    </div>
  </div>
)

export default Unidad1
