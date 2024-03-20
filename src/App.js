import logo from "./logo.svg";
import "./App.css";
// import Card from "./components/card";
import { useState, useEffect } from "react";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Col, Button } from "react-bootstrap";
import { Route, Routes, useHistory } from "react-router-dom";
import NotFound from "./components/notfound";
import Register from "./components/Register";
import Product from "./components/oneproduct";
import router from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    // <Register />
    // <Product />
    <RouterProvider router={router} ></RouterProvider>
    // <Routes>
    //   <Route exact path="/products" element={<Products />} />
    //   <Route exact path="/products/:id" element={<Product />} />
    //   <Route exact path="/register" element={<Register />} />
    //   <Route path="*" element={<NotFound />} />
    // </Routes>
  );
}

export default App;
