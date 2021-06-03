import React, { useState, useEffect } from "react";
import Product from "../../components/product/Product";
import "./productsContainer.css";
import axios from "axios";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => getProducts(), []);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:3000/api/products");
    setProducts(res.data);
  };

  return (
    <div className="products__container">
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
