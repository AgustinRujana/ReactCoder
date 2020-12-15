import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Home from "./componentes/Home";
import CartDetail from "./componentes/CartDetail"
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import "./App.css";
import { CartContext, CartProvider } from "./context/CartContext";

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
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
