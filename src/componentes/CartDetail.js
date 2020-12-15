import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartDetail() {
  const [cartItems] = useContext(CartContext);

  return (
    <div>
        {cartItems.length === 0 && <div>No hay productos.</div>}
      {cartItems.map((order, index) => {
        return (
          <div key={index}>
            <p>{order.Item.name}</p>
            <p>{order.Item.size}</p>
            <p>
              <b>${order.Item.price}</b>
            </p>
            <p>{order.Quantity}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CartDetail;
