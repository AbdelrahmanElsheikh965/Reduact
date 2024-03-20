import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import Card from "../card";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then((data) => data.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section id="work" className="portfolio-mf sect-pt4 route" style={{'width': '950px'}}>
      <div className="container">
        <div className="row">
        {products.products?.map((product)=>(
          <Card product={product}></Card>
        ))}
        </div>
      </div>
    </section>
  );
}
