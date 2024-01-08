import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data";
export const Detail = () => {
  const { id } = useParams();
  const product = data.find((product) => product.id == id);
  console.log(product);
  const { name } = product;
  return (
    <div>
      <h2> Parmas ID : {id}</h2>
      <h2> Product ID : {product.id}</h2>
      <h2> Product name : {name}</h2>
    </div>
  );
};
