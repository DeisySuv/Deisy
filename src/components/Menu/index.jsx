import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Menu = () => (
  <div className='menu'>
    <input type='checkbox' id='menu' />
    <label htmlFor='menu'>Menú</label>
    <ul className='options'>
      <li>
        <Link to='/'>Inicio</Link>
      </li>
      <li>
        <Link to='/unidad-1'>Unidad 1</Link>
      </li>
      <li>
        <Link to='/unidad-2'>Unidad 2</Link>
      </li>
      <li>
        <Link to='/unidad-3'>Unidad 3</Link>
      </li>
      <li>
        <Link to='/unidad-4'>Unidad 4</Link>
      </li>
    </ul>
  </div>
)

export default Menu
