import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import { UserContextProvider } from "./context/userContext";
import Categories from "./components/categories/Categories";
import ProductsContainer from "./containers/productsContainer.js/ProductsContainer";
import ShoppingCart from "./containers/shoppingCart/ShoppingCart";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Navbar />
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/shopping-cart">
            <Categories />
            <ShoppingCart />
          </Route>
          <Route exact path="/">
            <Categories />
            <ProductsContainer />
          </Route>
        </Switch>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
