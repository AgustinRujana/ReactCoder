import React from "react";
// import { useParams } from "react-router-dom";
// import { getFirestore } from "../firebase";
import ItemList from "./ItemList";
import ItemsCatHeading from "./ItemsCatHeadings";

const ItemsCatalogue = () =>{
    return (
        <div>
            <ItemsCatHeading/>
            <ItemList/>
        </div>
    )

}

export default ItemsCatalogue;