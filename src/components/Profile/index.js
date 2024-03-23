import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const data = useSelector((state) => state.profile_information);
  console.log("data");
  console.log(data);
  return (
    <>
      <p> Name : {data.user_data.name} </p>
      <p> Email : {data.user_data.email} </p>
    </>
  )
}
