import './Header2.css';
import logo from '../../assets/unimetLogo.png';
import person_icon from '../../assets/person.svg';
import expand_more from '../../assets/expand_more.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bar'>
      <Link to='/menuAgrup' className='l'>
        <img src={logo} alt="Logo Unimet" className="logo_" />
      </Link>
      <div className='perfil'>
        <div className='icon'><img src={person_icon} alt='icono' /></div>
        <button onClick={toggleMenu} className='btn_expand' type="button"> <img src={expand_more} /> </button>
      </div>
      {isOpen && (
        <div className='menu'>
          <Link to='/Perfil' className='l'><button className='btn_p'>Mi cuenta</button></Link>
          <Link to='/donaciones' className='l'><button className='btn_p'>Realizar Donación</button></Link>
          <Link className='l'><button className='btn_p'>Cerrar Sesión</button></Link>
        </div>)}


    </div>
  );
};

export default Header2;
