import React from "react";
import { Link } from "react-router-dom";

export const Prdocuts = ({ id, name }) => {
  return (
    <div>
      <h2>
        Id : {id} <span>name:{name}</span>
        <Link to={`/detail/${id}`}>detail product</Link>
      </h2>
    </div>
  );
};
