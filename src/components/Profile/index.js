import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const data = useSelector((state) => state.ee);
  console.log("data");
  console.log(data);
  return (
    <>
      <p> Name : {data.userInfo.name} </p>
      <p> Email : {data.userInfo.email} </p>
    </>
  )
}
