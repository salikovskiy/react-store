import React, { Component } from "react";
import Baner from "../components/Baner/Baner";
import Slider from "../components/Carousel/Carousel";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Slider />
        <Baner />
      </div>
    );
  }
}

export default Homepage;
