import "./menuAgrup.css";
import Header2 from "../../components/Header2/Header2";
import Footer2 from "../../components/footer2/footer2";
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
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredAgrup = items.filter((agrupacion) =>
    agrupacion.nombre.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  if (!items || items.length === 0) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <Header2 />
      <input
        placeholder="Ingresa el nombre del juego"
        className="search"
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
      <ul className="group_card">
        {filteredAgrup.map((item) => (
          <li className="card" key={item.id} style={{ listStyleType: "none" }}>
            <div className="card_title">
              <strong>{item.nombre}</strong>
            </div>

            <button
              className="btn_info"
              key={item.id}
              onClick={() => handleAgrupSelection(item)}
            >
              VER MAS
            </button>

            <Agrupacion info={selectedAgrup} />
          </li>
        ))}
      </ul>
      <Footer2></Footer2>
    </div>
  );
}