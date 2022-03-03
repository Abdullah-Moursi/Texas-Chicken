import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import PublicIcon from "@mui/icons-material/Public";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const [active, setActive] = useState('menu')

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.navbar__options}>
        <div className={styles.navbar__options_pages}>
          <h3 onClick={() => setActive('story')} className={active === 'story' && styles.active}>STORY</h3>
          <h3  onClick={() => setActive('food')} className={active === 'food' && styles.active}>FOOD</h3>
          <h3  onClick={() => setActive('locations')} className={active === 'locations' && styles.active}>LOCATIONS</h3>
          <h3  onClick={() => setActive('menu')} className={active === 'menu' && styles.active} >MENU</h3>
        </div>
        <div className={styles.navbar__options_icons}>
          <div className={styles.account__icon}>
            <AccountCircleIcon />
          </div>
          <div>
            <ShoppingBagIcon />
          </div>
          <div className={styles.switch__language}>
            <PublicIcon className={styles.switch__language_icon} />
            <span>عربي</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
