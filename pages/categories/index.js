import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Categories.module.css";

const index = ({ categories }) => {
  return (
    <div className={styles.categories__container}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link key={category.ID} href="/category/[id]" as={`/category/${category.ID}`} passHref>
            <div className={styles.category}>
              <Image
                width={250}
                height={300}
                quality={100}
                alt={category.name}
                src={category.ImagePath}
              />
              <button>{category.Name}</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch("https://task-api-eosin.vercel.app/api/categories");
  const categories = await res.json();

  return {
    props: {
      categories,
    },
  };
};
