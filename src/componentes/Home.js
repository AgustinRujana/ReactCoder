import React from 'react';
import ItemList from './ItemList';

const Home = ({titulo}) => { 
    return (
      <div>
        <div className="mt-5 row justify-content-center">
            <h1 className="text-center">{titulo}</h1>
        </div>
        <ItemList/>
      </div>
    )
  }
export default Home;