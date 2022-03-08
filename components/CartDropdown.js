import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import styles from "../styles/CartDropdown.module.css";
import { Button } from "@mui/material";
import Link from "next/link";

import { useSelector } from "react-redux";
import Image from "next/image";

export default function BasicMenu() {
  const state = useSelector((state) => state.handleCart);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ShoppingBagIcon onClick={handleClick} />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {state.length > 0 ? (
          <div className={styles.dropdown__container}>
            <>
              <p>My cart contains:</p>
              {state.map((el) => (
                <>
                  <MenuItem>
                    <div className={styles.dropdown__item}>
                      <Image
                        height={60}
                        width={60}
                        src={el.ImagePath}
                        alt={el.ID}
                      />
                      <p>Quantity: {el.qty}</p>
                      {el.Name}
                    </div>
                  </MenuItem>
                </>
              ))}
              <Link href="/cart" passHref>
                <Button
                  onClick={handleClose}
                  className={styles.navigation__button}
                  variant="contained"
                >
                  Go to Cart!
                </Button>
              </Link>
            </>
          </div>
        ) : (
          <div className={styles.dropdown__container}>
            <p>Your Cart Is Empty!</p>
            <Link href="/categories" passHref>
              <Button
                onClick={handleClose}
                className={styles.navigation__button}
                variant="contained"
              >
                Order now
              </Button>
            </Link>
          </div>
        )}
      </Menu>
    </div>
  );
}
