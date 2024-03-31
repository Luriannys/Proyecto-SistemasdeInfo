import React from 'react'
import './New_Group.css';
import Header2 from '../../components/Header2/Header2';

const New_Group = () => {
  return (
        <>
        <Header2/>
        <h2 id='ti'>Crear agrupación</h2>
        <div className='newG_container'>
        <div className='c'>
          <label >Nombre
              <input className='input2' type='text' />
          </label>
          <label>Email
              <input className='input2' type='email' />
          </label>
          <label>Instagram
              <input className='input2' type='text' />
          </label>
          <label>Teléfono
              <input className='input2' type='text' />
          </label>
          <label>Descripción
              <input className='input2' type='text' />
          </label>
          <label>Imagen de la agrupación - URL
              <input className='input2' type='text' />
          </label>
          </div>
          <button className='btns_'>Crear Agrupación</button>
              
          </div></>
  )
}

export default New_Group
