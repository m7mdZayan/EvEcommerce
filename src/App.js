import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import { UserContextProvider } from "./context/userContext";
import Categories from "./components/categories/Categories";
import ProductsContainer from "./containers/productsContainer.js/ProductsContainer";
import ShoppingCart from "./containers/shoppingCart/ShoppingCart";
import CategoryContainer from "./containers/categoryContainer/CategoryContainer";
import Orders from "./containers/orders/Orders";

import Footer from "./components/footer/Footer";

function App() {
  const [categoryId, setCategoryId] = useState("");

  const getCategoryId = (category_id) => {
    setCategoryId(category_id);
  };

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
            <Categories getCategoryId={getCategoryId} />
            <ShoppingCart />
          </Route>
          <Route path="/category">
            <Categories getCategoryId={getCategoryId} />
            <CategoryContainer categoryId={categoryId} />
          </Route>
          <Route exact path="/myorders">
            <Categories getCategoryId={getCategoryId} />
            <Orders />
          </Route>
          <Route exact path="/">
            <Categories getCategoryId={getCategoryId} />
            <ProductsContainer />
          </Route>
        </Switch>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
