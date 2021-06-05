import React, { useState, useEffect } from "react";
import Product from "../../components/product/Product";
import "../productsContainer.js/productsContainer.css";
import axios from "axios";

const CategoryContainer = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  //   const [cat_id, setCat_id] = useState("");

  useEffect(() => getProducts(), [categoryId]);

  const getProducts = async () => {
    const res = await axios.post(
      "http://localhost:3000/api/products/category",
      { categoryId }
    );
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

export default CategoryContainer;
