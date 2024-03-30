import "./agrupacion.css";
import Header2 from "../../components/Header2/Header2";
import Footer2 from "../../components/footer2/footer2";
import { db } from "/src/controller/services/firebase.js";
import saman from '../../assets/saman.jpg';
import ig from '../../assets/ig.svg';
import email from '../../assets/email.svg';
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Agrupacion() {
  const [agrupacion, setAgrupacion] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchAgrupacion = async () => {
      const docRef = doc(db, "Agrupaciones", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setAgrupacion({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("no se encontro el documento");
      }
    };

    fetchAgrupacion();
  }, []);

  if (!agrupacion) {
    return <div></div>;
  }



  return (
    <div>
      <Header2 />
      <div className="imagen_group">
      <img className='foto' src={saman}></img>
      <h1 className="title_g">{agrupacion.nombre}</h1>
      </div>
      <div className="Info_card">
      <p style={{ textAlign: 'justify' }}>{agrupacion.descripcion}</p>
      <div className="btns">
      <Link to="/donaciones"><button className="btns_"> <strong>Donar </strong></button></Link>
      <button className="btns_"> <strong>Agregar Testimonio</strong> </button>
      <button className="btns_"> <strong>Unete </strong></button>
      </div>
      <div style={{ marginBottom: '15px' }}>
      <div style={{ marginBottom: '15px'}}>
      <strong>Contáctanos</strong>
<<<<<<< Updated upstream
=======
      </div>
>>>>>>> Stashed changes
        <div className="contact_us"><img className='icon_i' src={ig}/><p>{agrupacion.instagram}</p></div>
        <div className="contact_us"><img className='icon_i' src={email}/><p>{agrupacion.email}</p></div>
      </div>
      <span style={{ color: 'black', fontSize: '40px', textAlign:'center' }}>Mira lo que <span style={{ color: '#FD8204', fontSize: '40px', textAlign:'center'}}>otros opinan</span></span>
      <ul className="testimonies">
        {agrupacion.testimonios.map((item) => (
          <li style={{listStyleType: 'none'}} className="feedback_box">
            <span >{item}</span>
          </li>
        ))}
      </ul>
      </div>
      <Footer2></Footer2>
    </div>
  );
}