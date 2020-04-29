import React from "react";
import heartIcon from "../../assets/icons/heart.svg";
import css from "./ProductItem.module.css";

const ProductItem = ({ data }) => (
  <li>
    <img src={data.image} alt="glasses" />
    <div className={css.infoWrapper}>
      <button className={css.btn}>
        <img src={heartIcon} alt="Add to favorite button" />
      </button>
      <p>{data.price}грн</p>
    </div>
  </li>
);

export default ProductItem;
