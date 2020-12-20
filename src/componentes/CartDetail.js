import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

import { getFirestore } from "../firebase";
import * as firebase from "firebase/app";
import "firebase/firestore";

function CartDetail() {
  const [cartItems] = useContext(CartContext);

  const CloseTransaction = () => {
    //Seteo de variables
    const buyerData = {
      name: "Pepe Juarez",
      phone: "2804321102",
      email: "email@Yahoo.ong",
    };

    let SumTotal = 0;
    cartItems.forEach((e) => {
      SumTotal = SumTotal + e.Quantity * e.Item.price;
    });

    const FinishOrder = {
      buyer: buyerData,
      items: cartItems,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: SumTotal,
    };

    //Logica
    const db = getFirestore();
    db.collection("Ordenes").add(FinishOrder).then(({ id }) => {
      alert(id);
    });
  };

  return (
    <div>
      {cartItems.length === 0 && (
        <div>
          No hay productos. <Link to={"/"}>Volver Al Home</Link>
        </div>
      )}
      {cartItems.map((order, index) => {
        return (
          <div key={index}>
            <p>{order.Item.name}</p>
            <p>{order.Item.size}</p>
            <p>
              <b>${order.Item.price}</b>
            </p>
            <p>{order.Quantity}</p>
            <button onClick={CloseTransaction}>Salir y Pagar</button>
          </div>
        );
      })}
    </div>
  );
}

export default CartDetail;
