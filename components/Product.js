import Image from "next/image";
import React from "react";
import styles from "../styles/Product.module.css";
import Link from "next/link";

const Product = ({ category }) => {
  
  return (
    <div className={styles.products}>
      {" "}
      {category.map((el) => (
        <Link
          key={el.ID}
          href={`${el.CategoryID}/ingredients/${el.ID}`}
          passHref
        >
          <div key={el.ID} className={styles.product}>
            <div className={styles.product__image}>
            <Image src={el.ImagePath} height={180} width={180} alt={el.Name} />
            </div>
            <p>
              {el.Name} <span>SAR {el.DefaultPrice}</span>{" "}
            </p>
          </div>
         </Link>
      ))}
    </div>
  );
};

export default Product;
