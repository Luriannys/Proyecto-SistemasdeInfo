import "./menuAgrup.css";
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
import { useParams, useNavigate } from "react-router-dom";
import Agrupacion from "../agrupacion/agrupacion";

export default function MenuAgrup() {
  const [items, setItems] = useState([]);
  const [selectedAgrup, setSelectedAgrup] = useState(null);

  const navigate = useNavigate();

  const handleClick = () => {
    setAgrupacion(dataAgrup);
    navigate("/agrupacion");
  };

  useEffect(() => {
    const fetchItems = async () => {
      const itemsCollection = collection(db, "Agrupaciones");
      const itemsSnapshot = await getDocs(itemsCollection);
      const itemsList = itemsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(itemsList);
      console.log(itemsList);
    };

    fetchItems();
  }, []);

  const handleAgrupSelection = (item) => {
    navigate(`/agrupacion/${item.id}`);
  };

  if (!items || items.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header></Header>
      <h1>Agrupaciones</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>
              <strong>{item.nombre}:</strong> {item.descripcion}
            </span>
            <button key={item.id} onClick={() => handleAgrupSelection(item)}>
              Info
            </button>
            <Agrupacion info={selectedAgrup} />
          </li>
        ))}
      </ul>
      <Footer></Footer>
    </div>
  );
}
