import React from "react";
import css from "./Baner.module.css";
import { Link } from "react-router-dom";
import glasses from "../../assets/images/Marshal.png";
import glassesTwo from "../../assets/images/Clubmaster.png";
import glassesTree from "../../assets/images/Aviator.png";
import newIcon from "../../assets/icons/newIcon.svg";

const Baner = () => (
  <div className={css.bannerWrapper}>
    <div className="textWrapper">
      <h2 className={`${css.banerHeading} animated fadeInDown`}>iconic line</h2>
      <p className={`${css.banerParagraph} animated fadeInDown`}>
        Класичні, сучасні та неповторні
      </p>
      <p className={css.banerPrice}>999грн</p>
      <Link to="/optical" className={`${css.banerLink} animated fadeInLeft`}>
        Дивитись всі
      </Link>
    </div>
    <div className="imageWrapper">
      <img
        className={`${css.banerImage} animated fadeInLeft`}
        src={glasses}
        alt="Marshal glasses"
      />
      <img
        className={`${css.banerImageSecond} animated fadeInLeft`}
        src={glassesTwo}
        alt="Clubmaster glasses"
      />
      <img
        className={`${css.banerImageThree} animated fadeInLeft`}
        src={glassesTree}
        alt="Aviator glasses"
      />
      <img
        className={`${css.newIcon} animated pulse infinite`}
        src={newIcon}
        alt="new icon"
      />
    </div>
  </div>
);

export default Baner;
