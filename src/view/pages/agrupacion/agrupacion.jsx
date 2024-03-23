import "./agrupacion.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { db } from "/src/controller/services/firebase.js";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <Header></Header>
      <h1>{agrupacion.nombre}</h1>
      <p>{agrupacion.descripcion}</p>
      <button> Donar </button>
      <button> Agregar Testimonio </button>
      <span>
        <strong>Contáctanos</strong>
        <p>{agrupacion.instagram}</p>
        <p>{agrupacion.email}</p>
      </span>
      <span> Mira lo que otros opinan </span>
      <ul>
        {agrupacion.testimonios.map((item) => (
          <li>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Footer></Footer>
    </div>
  );
}
