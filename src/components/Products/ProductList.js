import React from "react";
import { data } from "../../data/products.json";
import ProductItem from "./ProductItem";
import css from "./ProductList.module.css";

const ProductsList = () => (
  <ul className={css.list}>
    {data.map((elem) => (
      <ProductItem data={elem} />
    ))}
  </ul>
);

export default ProductsList;
