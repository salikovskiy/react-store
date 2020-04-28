import React, { Component } from "react";
import Baner from "../components/Baner/Baner";
import Slider from "../components/Carousel/Carousel";
import ProductList from "../components/Products/ProductList";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Slider />
        <Baner />
        <ProductList />
      </div>
    );
  }
}

export default Homepage;
