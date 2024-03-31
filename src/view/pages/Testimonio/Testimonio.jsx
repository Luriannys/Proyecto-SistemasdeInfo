import React from 'react'
import './Testimonio.css'
import Header2 from '../../components/Header2/Header2';

export default function Testimonio() {
  const agregar = () => {
    alert('Comentario agregado con exito!');
  };
  return (
    <><Header2 />
    <div className='testimony'>
      <h1>Añadir testimonio ...</h1>
      <input contentEditable='true' className='input_testimonio' placeholder='Escriba su testimonio ... ' type='text' />
      <div className='botones_t'>
        <button className='canceled'>Cancelar</button>
        <button className='btns_' onClick={agregar}>Agregar</button>
      </div>
    </div></>
  )
}

