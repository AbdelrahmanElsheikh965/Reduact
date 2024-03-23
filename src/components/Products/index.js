import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import Card from "../card";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../../Store/Slices/productsSlice";

export default function Products() {

  const dispatch = useDispatch();
  const { prods, isLoading } = useSelector((state) => state.products_information.products);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      dispatch(getProductsThunk());
    }

    return () => {
      mounted = false;
    };
  }, []);

  // console.log(prods);

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products?limit=6")
  //     .then((data) => data.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.log(err.message));
  // }, []);

  return isLoading ? (
    <p style={{ margin: "100px" }}>is Loadding.......</p>
  ) : prods ? (
    <section id="work" className="portfolio-mf sect-pt4 route" style={{'width': '950px'}}>
      <div className="container">
        <div className="row">
          <section id="work" className="portfolio-mf sect-pt4 route" style={{'width': '950px'}}>
            <div className="container">
              <div className="row">
                  {prods?.map((product)=>(
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
