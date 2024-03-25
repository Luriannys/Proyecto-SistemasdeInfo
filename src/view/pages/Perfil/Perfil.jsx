import './Perfil.css';
import Header2 from '../../components/Header2/Header2'
import person_icon from '../../assets/person.svg';
import React from 'react'



export default function Perfil() {
  return (
    <>
    <Header2 />
    <div className='User_cont'>
        <div className='User_info'>
            <div className='user_picture'><img id='img' src={person_icon} alt='foto de perfil'/>
            </div>
            <h4 className='t'>JUANITA PEREZ ESMERALDA CALLENUEVA</h4>
            <div>__________________________________</div>
            <h5>Correo electronico: </h5>
            <h5>Fecha de Nacimiento: </h5>
            <h5>Agrupaciones a las que pertenezco: </h5>
        </div>
        <div className='User_edit'>
            <div className='c'>
            <label>Nombre 
                <input className= 'input' type='text' />
            </label>
            <label>Apellido 
                <input className= 'input'type='text' />
            </label>
            <label>Telefono
                <input className= 'input' type='number' />
            </label>
            </div>
            <div className='c'>
            <label>Correo Electronico
                <input className= 'input' type='email' />
            </label>
            <label>Fecha de Nacimiento 
                <input className= 'input' type='number' />
            </label>
            <label>Carrera
                <input className= 'input' type='text' />
            </label>
            
            </div>
            <button className='btn_edit'> Actualizar </button>
            </div>

        


    </div>
      
    </>
  )
}
