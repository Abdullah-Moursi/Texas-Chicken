import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import PublicIcon from "@mui/icons-material/Public";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CartDropdown from '../components/CartDropdown'
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState("menu");

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link href="/" passHref>
          <Image onClick={() => setActive("menu")} src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.navbar__options}>
        <div className={styles.navbar__options_pages}>
          <h3
            onClick={() => setActive("story")}
            className={active === "story" && styles.active}
          >
            <Link href="https://texas-psdigital.vercel.app/story">STORY</Link>
          </h3>
          <h3
            onClick={() => setActive("food")}
            className={active === "food" && styles.active}
          >
            <Link href="/categories">FOOD</Link>
          </h3>
          <h3
            onClick={() => setActive("locations")}
            className={active === "locations" && styles.active}
          >
            <Link href="https://texas-psdigital.vercel.app/locations">
              LOCATIONS
            </Link>
          </h3>
          {active === "menu" && (
            <h3
              onClick={() => setActive("menu")}
              className={active === "menu" && styles.active}
            >
              <Link href="/">MENU</Link>
            </h3>
          )}
        </div>
        <div className={styles.navbar__options_icons}>
          <div className={styles.account__icon}>
            <AccountCircleIcon />
          </div>
          <div>
            <CartDropdown />
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
