import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import css from "./Slider.module.css";

const Slider = () => (
  <Carousel autoPlay={4000} animationSpeed={1000} infinite>
    <div className={`${css.imageOne} ${css.slider}`}>
      <p className={css.sliderText}>Стиль</p>
    </div>
    <div className={`${css.imageTwo} ${css.slider}`}>
      <p className={css.sliderText}>Вишуканість</p>
    </div>
    <div className={`${css.imageThree} ${css.slider}`}>
      <p className={css.sliderText}>Зручність</p>
    </div>
  </Carousel>
);

export default Slider;
