import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("Productos");
    const idItem = itemCollection.doc(id);

    idItem.get().then((response) => {
      setItem(response.data());
    });
  }, [id]);

  const ReturnItems = () => {
    if (!item) {
      return <p>Cargando...</p>;
    }
    return <ItemDetail item={item} />;
  };

  //Salida de ItemDetailContainer
  return (
    <div>
      <ReturnItems />
    </div>
  );
};

export default ItemDetailContainer;
