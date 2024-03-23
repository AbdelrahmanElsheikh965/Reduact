import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import Card from "../card";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../../Store/Slices/productsSlice";

export default function Products() {

  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products_information.products);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      dispatch(getProductsThunk());
    }

    return () => {
      mounted = false;
    };
  }, []);

  return isLoading ? (
    <p style={{ margin: "100px" }}>is Loading.......</p>
  ) : products ? (
    <section id="work" className="portfolio-mf sect-pt4 route" style={{'width': '950px'}}>
      <div className="container">
        <div className="row">
          <section id="work" className="portfolio-mf sect-pt4 route" style={{'width': '950px'}}>
            <div className="container">
              <div className="row">
                  {products?.map((product)=>(
                    <Card product={product}></Card>
                  ))}
              </div>
            </div>
        </section>
        </div>
      </div>
    </section>
  ) : (
    <p> not found</p>
  );
}
