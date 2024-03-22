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
  // const [gameDetails, setGameDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchAgrupacion = async () => {
      const docRef = doc(db, "agrupaciones", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setAgrupacion({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("no se encontro el documento");
      }
    };

    if (!agrupacion) {
      return <div></div>;
    }

    // const fetchGame = async () => {
    //   const gameCollection = collection(db, "games");
    //   const snapshot = await getDocs(gameCollection);
    //   const list = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }));
    //   setGameDetails(list);
    // };

    fetchAgrupacion();
    // fetchGame();
  }, []);

  return (
    <div className="Agrupacion">
      <Header></Header>
      <h1 className="title">{agrupacion.nombre}</h1>
      <p className="clubBox">{agrupacion.descripcion}</p>
      <button className="btn">Donar</button>
      <button className="btn">Agregar Testimonio</button>
      <Footer></Footer>
    </div>
  );
}
