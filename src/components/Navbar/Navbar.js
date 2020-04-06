import React, { Component } from "react";
import css from "./Navbar.module.css";
import heartIcon from "../../assets/icons/heart.svg";
import loupeIcon from "../../assets/icons/loupe.svg";
import cartIcon from "../../assets/icons/shopping-cart.svg";
import userIcon from "../../assets/icons/user.svg";

class Navbar extends Component {
  state = {
    open: false,
  };

  handleToggler = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <nav className={css.nav}>
        <button className={css.toggler} onClick={this.handleToggler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="logoWrapper">
          <p className={css.logo}>clearness</p>
        </div>
        <div
          className={
            this.state.open ? css.linksWrapper : css.LinksWrapperMedium
          }
          onClick={this.handleToggler}
        >
          <ul className={css.list}>
            <li className={css.listItem}>сонцезахисні</li>
            <li className={css.listItem}>оптичні</li>
            <li className={css.listItem}>про нас</li>
            <li className={css.listItem}>контакти</li>
          </ul>
        </div>
        <div className={css.buttonsWrapper}>
          <button className={`${css.btn} ${css.smallNone}`}>
            <img src={heartIcon} alt="heart icon" />
          </button>
          <button className={`${css.btn} ${css.smallNone}`}>
            <img src={loupeIcon} alt="loupe icon" />
          </button>
          <button className={css.btn}>
            <img src={cartIcon} alt="cart icon" />
          </button>
          <button className={css.btn}>
            <img src={userIcon} alt="user icon" />
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
