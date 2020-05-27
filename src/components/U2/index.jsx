import React from 'react'
import Menu from '../Menu'
import './styles.css'
import Cronograma from '../../assets/Cronograma.png'

const Unidad2 = () => (
  <div className='container'>
    <Menu />
    <div className='content'>
      <h1>Unidad 2</h1>
      <p>
        En esta unidad nos enfocamos a mejorar nuestros product backlog,
        calendarización y fichas de los sprints.
      </p>
      <p>
        De esta forma pudimos crear mejores historias de usuarios, además de
        agregar comentarios y condiciones de una manera más entendible a nuestro
        product backlog. Además, usamos herramientas enfocadas a organización de
        proyectos como Jira y Trello, para crear un cronograma de actividades de
        nuestro proyecto.
      </p>
      <p>
        Además, también en esta etapa de la unidad aprendimos a diferencia 3
        conceptos diferentes que son:
      </p>
      <ul className='conceptos'>
        <li>
          <b>Product Backlog:</b> Es donde tenemos redactados todos los
          requerimientos del proyecto, tantto actividades como historias de
          usuario.
        </li>
        <li>
          <b>Sprint Backlog:</b> Es el conjunto de actividades e historias que
          trabajaremos en determinado sprint del proyecto, con el objetivo de
          entregar una pieza de software funcional a finalizar el mismo.
        </li>
        <li>
          <b>Fichas del backlog:</b> Las fichas del backlog son la versión
          extensas de las historias de usuarios, donde plantearemos casos de uso
          del usuario final y agregaremos todas estas condiciones a su
          descripción, esto se hace con el objetivo de validar que la actividad
          o historia se completó.
        </li>
      </ul>
      <img src={Cronograma} id='cronograma' alt='Cronograma' />
    </div>
  </div>
)

export default Unidad2
