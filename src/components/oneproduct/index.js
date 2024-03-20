import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import Card from "../card";
import { useParams } from "react-router-dom";

export default function Product() {
  
  const id = useParams().id;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((data) => data.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide">
                  <img src={product.thumbnail} alt="" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>Title</strong> {product.title}{" "}
                </li>
                <li>
                  <strong>Category</strong> {product.category}{" "}
                </li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>This is description of the product</h2>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
