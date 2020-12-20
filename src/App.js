import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Home from "./componentes/Home";
import CartDetail from "./componentes/CartDetail"
import ItemDetailContainer from "./componentes/ItemDetailContainer";
// import ItemCategoryList from "./componentes/ItemCategoryList"
import ItemsCatalogue from "./componentes/ItemsCatalogue";
import "./App.css";
import { CartProvider } from "./context/CartContext";
// import { useEffect } from "react";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home titulo="BIENVENIDOS" />
          </Route>
          <Route exact path="/cart">
            <CartDetail/>
          </Route>
          <Route exact path="/items/:categoryId">
            <ItemsCatalogue/>
          </Route>
          <Route exact path="/items/:categoryId/:id">
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
