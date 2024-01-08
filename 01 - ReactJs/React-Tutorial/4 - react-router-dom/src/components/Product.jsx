import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../data";
import {Prdocuts} from "./Prdocuts";
export const Product = () => {
  return (
    <div>
      <h1>Product</h1>
      {data.map((products) => {
        return (
          <div key={products.id}>
            <Prdocuts {...products} />
          </div>
        );
      })}
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};
