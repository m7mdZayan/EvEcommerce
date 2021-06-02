import React, { useEffect, useState } from "react";
import "./categories.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => getCategories(), []);

  const getCategories = async () => {
    const res = await axios.get("http://localhost:3000/api/categories");
    setCategories(res.data);
  };

  return (
    <nav className="categories__nav">
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            <Link to={category.name} style={{ color: "#fff" }}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
