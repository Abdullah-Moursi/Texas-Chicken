import React from "react";
import styles from "../../styles/Cart.module.css";
import Link from "next/link";
import CartContentsTable from "../../components/CartContentsTable";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <h1> SHOPPING CART</h1>
      <div className={styles.cart__container}>
        <div className={styles.cart__contents}>
          <Link href="/categories" passHref>
            <p>+Add More Food</p>
          </Link>
          <CartContentsTable />
        </div>
        <div className={styles.cart__checkout}>
            <h3>PAYMENT SAMMARY</h3>
            </div>
      </div>
    </div>
  );
};

export default Cart;
