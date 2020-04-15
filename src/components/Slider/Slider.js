import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import css from "./Slider.module.css";

const Slider = () => (
  <div className={css.carousel}>
    <Carousel autoPlay={4000} animationSpeed={1000} infinite>
      <div className={`${css.imageOne} ${css.slider}`}></div>
      <div className={`${css.imageTwo} ${css.slider}`}></div>
      <div className={`${css.imageThree} ${css.slider}`}></div>
    </Carousel>
    <div className={css.carouselTextWrapper}>
      <p className={css.carouselText}>
        Захист від синього світла та зменшення цифрового напруження очей.
        Додавайте в будь-яку оправу (Rx або Non-Rx)
      </p>
    </div>
  </div>
);

export default Slider;
