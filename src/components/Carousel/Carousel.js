import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import css from "./Carousel.module.css";
import { Link } from "react-router-dom";

const Slider = () => (
  <div className={css.carousel}>
    <Carousel autoPlay={4000} animationSpeed={1000} infinite>
      <div className={`${css.imageOne} ${css.slider}`}></div>
      <div className={`${css.imageTwo} ${css.slider}`}></div>
      <div className={`${css.imageThree} ${css.slider}`}></div>
    </Carousel>
    <div className={css.textWrapper}>
      <h2 className={css.testHeading}>Ідеальні окуляри.</h2>
      <p className={css.testParagraph}>
        Пройдіть опитування та дізнайтеся які окуляри підходять саме вам!
      </p>
      <Link to="/test" className={`${css.testButton}`}>
        Розпочати тест
      </Link>
    </div>
  </div>
);

export default Slider;
