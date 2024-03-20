import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <div className="col-md-4">
      <div className="work-box">
        <Link to={`/products/${product.id}`}>
          <a data-gallery="portfolioGallery" className="portfolio-lightbox">
            <div
              className="work-img"
              style={{ width: "250px", height: "120px" }}
            >
              <img src={product.thumbnail} className="img-fluid" />
            </div>
          </a>
        </Link>
        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <p>{product.title}</p>
              <div className="w-more">
                <span className="w-ctegory">{product.category}</span> /{" "}
                <span className="w-date">Category</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="w-like">
                <a href="portfolio-details.html">
                  {" "}
                  <span className="bi bi-plus-circle"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
