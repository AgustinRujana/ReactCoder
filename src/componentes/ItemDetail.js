import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const [cartItems, setCartItem] = useContext(CartContext);
  
  const onAdd = (amount) => {
    const sameId = cartItems.some((e) => e.Item.id === item.id);
    const newOrder = { Quantity: amount, Item: item };

    if(sameId){
      cartItems.forEach(ele => {
        if (ele.Item.id === item.id){
          const newCartItems = cartItems.filter((e) => e.Item.id !== item.id)
          setCartItem([... newCartItems, newOrder])
        }
      });
    } else {
      setCartItem([...cartItems, newOrder]);
    }
  };

  return (
    <div className="mt-5 row justify-content-center">
      <div>
        <p>{item.name}</p>
        <p>{item.size}</p>
        <p>
          <b>${item.price}</b>
        </p>
      </div>
      <ItemCount initial="0" min={item.min} max={item.max} onAdd={onAdd} />
    </div>
  );
};
export default ItemDetail;
