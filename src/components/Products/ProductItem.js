import React from "react";

const ProductItem = ({ data }) => (
  <li>
    <img src={data.image} alt="glasses" />
    <p>{data.price}грн</p>
  </li>
);

export default ProductItem;
