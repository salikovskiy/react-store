import React, { Component } from "react";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css";
import heartIcon from "../../assets/icons/heart.svg";
import loupeIcon from "../../assets/icons/loupe.svg";
import cartIcon from "../../assets/icons/shopping-cart.svg";
import userIcon from "../../assets/icons/user.svg";
import "animate.css";

class Navbar extends Component {
  state = {
    open: false,
  };

  handleToggler = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <nav className={`${css.nav} container`}>
        <div className={css.togglerWrapper}>
          <button className={css.toggler} onClick={this.handleToggler}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button className={`${css.btn} ${css.smallDisplay}`}>
            <img src={loupeIcon} alt="loupe icon" />
          </button>
        </div>
        <div className="logoWrapper">
          <p className={css.logo}>
            <Link to="/">clearness</Link>
          </p>
        </div>
        <div
          className={
            this.state.open ? css.linksWrapper : css.linksWrapperMedium
          }
          onClick={(e) => {
            if (
              e.target.nodeName === "DIV" ||
              (e.target.nodeName === "A" &&
                e.target.parentNode.parentNode.parentNode.className ===
                  css.linksWrapper)
            )
              this.handleToggler();
          }}
        >
          <ul className={`${css.list} animated slideInLeft`}>
            <li className={css.listItem}>
              <Link to="/sunglasses">сонцезахисні</Link>
            </li>
            <li className={css.listItem}>
              <Link to="/optical">оптичні</Link>
            </li>
            <li className={css.listItem}>
              <Link to="/about">про нас</Link>
            </li>
            <li className={css.listItem}>
              <Link to="/contacts">контакти</Link>
            </li>
            <li className={`${css.listItem} ${css.smallDisplay}`}>
              <Link to="/favorites">мої вподобання</Link>
            </li>
          </ul>
        </div>
        <div className={css.buttonsWrapper}>
          <button className={`${css.btn} ${css.smallNone}`}>
            <img src={loupeIcon} alt="loupe icon" />
          </button>
          <Link to="/favorites" className={`${css.btn} ${css.smallNone}`}>
            <img src={heartIcon} alt="heart icon" />
          </Link>
          <Link to="/cart" className={css.btn}>
            <img src={cartIcon} alt="cart icon" />
          </Link>
          <Link to="profile" className={css.btn}>
            <img src={userIcon} alt="user icon" />
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
