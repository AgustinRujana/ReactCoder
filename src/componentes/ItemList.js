import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ItemsObj from './Items';

const ItemList = () => {
    const [items, setItems] = useState();

    useEffect(() => {
        const list = getItems();
        const prod = JSON.stringify(list)
    }, []);

    const getItems = () => {
        const serverResponse = new Promise(resolve => {
            setTimeout(() => {
                const Item = ItemsObj;
                resolve(Item);
            }, 2000)
        });
        serverResponse.then(response =>{ setItems(response); })
    }

    const ReturnItems = () => {
        if (!items){
            return <p className="text-center">Cargando...</p>;
        }
        const list = items.map((e, index) =>{
            return <Link to={`/item/${e.id}`}><div key={index} className="row justify-content-center">
                    <p>{e.name}</p>
                    <p><b>${e.price}</b></p>
                   </div></Link>
        })
        return list;
    }

    //Salida de ItemList
    return(
        <div>
            <ReturnItems/>
        </div>
    )
}

export default ItemList;
