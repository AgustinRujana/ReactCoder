import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemsObj from "./Items";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(async () => {
    const list = await getItem();
  }, []);

  const getItem = () => {
    const serverResponse = new Promise((resolve) => {
      setTimeout(() => {
        const Items = ItemsObj;
        resolve(Items);
      }, 1000);
    });
    serverResponse.then((response) => {
      response.forEach((element) => {
        if (element.id === Number(id)) {
          setItem(element);
        }
      });
    });
  };

  const ReturnItems = () => {
    if (!item) {
      return <p>Cargando...</p>;
    }
    return <ItemDetail item={ item } />;
  };

  //Salida de ItemDetailContainer
  return (
    <div>
      <ReturnItems />
    </div>
  );
};

export default ItemDetailContainer;
