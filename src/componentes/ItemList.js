import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const ItemList = () => {
  const [items, setItems] = useState();
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("Productos"); //Nombre de la DataBase

    if (categoryId === "Todos"){
      itemCollection.get().then((response) => {
        const aux = response.docs.map((e) => {
          return e;
        });
        setItems(aux);
      });
    } else {
      const ItemsCategory = itemCollection.where('categoryId', '==', categoryId )
      ItemsCategory.get().then((response) => {
        const aux = response.docs.map((e) => {
          return e;
        });
        setItems(aux);
      });
    }
  }, [categoryId]);

  const ReturnItems = () => {
    if (!items) {
      return <p className="text-center">Cargando...</p>;
    }
    const list = items.map((e, index) => {
      return (
        <Link to={`/items/${e.data().categoryId}/${e.id}`}> 
          <div key={index} className="row justify-content-center">
            <p>{e.data().title}</p>
            <p>
              <b>${e.data().price}</b>
            </p>
          </div>
        </Link>
      );
    });
    return list;
  };

  //Salida de ItemList
  return (
    <div>
      <ReturnItems />
    </div>
  );
};

export default ItemList;
