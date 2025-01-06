import React, { useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-between p-8">
      <ul>
        {products.length > 0 ? (
          products.map((p, index) => (
            <li key={index} className="mb-4 px-2 py-3 bg-gray-300 rounded-md">
              {p.title}
            </li>
          ))
        ) : (
          <h1>Click that button to load the Product --------------> </h1>
        )}
      </ul>
      <button
        onClick={getProducts}
        className="px-3 py-2 h-12 rounded-md bg-sky-500 text-white"
      >
        Call Products API
      </button>
    </div>
  );
}

export default App;