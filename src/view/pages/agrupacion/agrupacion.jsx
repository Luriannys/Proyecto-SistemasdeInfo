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

import metromun from "../../assets/metromun.jpg";
import formula from "../../assets/formula.jpg";
import cavum from "../../assets/cavum.jpg";
import formulaLogo from "../../assets/logos/LOGO FORMULA SAE.png";
import jazzLogo from "../../assets/logos/Logo Jazz en Concreto .jpg";
import chemecar from "../../assets/logos/Logo chem-e-car.png";
import afro from "../../assets/logos/E. Afro-Venezolano - ps.png";
import arca from "../../assets/logos/Logo ARCA original.png";
import rescateUnimet from "../../assets/logos/logo rescate vect 2 (2) (1).png";
import top from "../../assets/logos/Copia de LOGO NEGRO sf.png";
import vmuns from "../../assets/logos/logo vmunsociety (1).png";
import radio from "../../assets/logos/Logo_RADIO_UNIMET._JPG-removebg-preview.png";
import metromunWorld from "../../assets/logos/Logo-MetroMUNWorld.png";
import samanFilm from "../../assets/logos/Samán Film Society - ps.png";
import thespisLogo from "../../assets/logos/Thespis_Versión_1-removebg-preview.png";

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
      <Footer></Footer>
    </div>
  );
}
