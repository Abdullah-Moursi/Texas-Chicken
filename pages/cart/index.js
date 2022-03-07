import React from "react";
import styles from "../../styles/Cart.module.css";
import Link from "next/link";
import CartContentsTable from "../../components/CartContentsTable";
import Button from "@mui/material/Button";




import { useSelector } from "react-redux";





const Cart = () => {




  const state = useSelector((state) => state.handleCart)




  return (
    <div className={styles.cart}>
      <h1> SHOPPING CART</h1>



{
  state.length > 0 ? 
 ( <>
  
       <div className={styles.cart__container}>

          <div className={styles.cart__contents}>
          <Link href="/categories" passHref>
            <p>+Add More Food</p>
          </Link>
          <CartContentsTable />
        </div>
        <div className={styles.cart__checkout}>
          <h3>PAYMENT SAMMARY</h3>
          <div className={styles.cart__summary}>
            <p>
              Total <span>SAR </span>{" "}
            </p>
          </div>

          <div className={styles.navigation__buttons}>
            <Button className={styles.navigation__button} variant="contained">
              checkout
            </Button>

            <Button className={styles.navigation__button} variant="contained">
              delivery
            </Button>
          </div>
        </div>
     </div>
  
  </>) : <div className={styles.emptyCart} >
  <p>{"Your Cart is Empty, let's"}</p>
  <Link href="/categories" passHref>
          <Button className={styles.navigation__button__cart} variant="contained">MAKE AN ORDER</Button>
        </Link> 
  </div>
}





   
    </div>
  );
};

export default Cart;
