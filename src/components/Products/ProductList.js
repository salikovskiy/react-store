import React from "react";
import { data } from "../../data/products.json";
import ProductItem from "./ProductItem";

const ProductsList = () => (
  <ul>
    {data.map((elem) => (
      <ProductItem data={elem} />
    ))}
  </ul>
);

export default ProductsList;
