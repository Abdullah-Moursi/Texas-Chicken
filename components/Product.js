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
            <Image src={el.ImagePath} height={120} width={120} alt={el.Name} />
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
