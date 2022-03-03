import Image from "next/image";
import React from "react";
import styles from "../styles/Product.module.css";

const Product = ({ category }) => {
  return (
    <div className={styles.products}>
      {" "}
      {category.map((el) => (
        <div key={el.ID} className={styles.product}>
          <Image src={el.ImagePath} height={120} width={120} alt={el.Name} />
          <p>{el.Name}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
