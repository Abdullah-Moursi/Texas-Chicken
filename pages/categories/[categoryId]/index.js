import React from "react";
import styles from "../../../styles/Category.module.css";
import Product from "../../../components/Product";
import Sidebar from "../../../components/Sidebar";

const Category = ({ category, categories }) => {
  const categoryName = categories.filter(
    (el) => el.ID === category[0].CategoryID
  )[0].Name;

  return (
    <div className={styles.category__container}>
      <div className={styles.category__sidebar}>
        <Sidebar categories={categories} />
      </div>
      <div className={styles.category__products}>
        <h1>{categoryName}</h1>
        <Product category={category} />
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://task-api-eosin.vercel.app/api/categories");
  const data = await res.json();

  const paths = data.map((el) => {
    return {
      params: { categoryId: el.ID.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.categoryId;
  const resCategory = await fetch(
    `https://task-api-eosin.vercel.app/api/products?catID=${id}`
  );
  const category = await resCategory.json();

  const resCategories = await fetch(
    "https://task-api-eosin.vercel.app/api/categories"
  );
  const categories = await resCategories.json();

  return {
    props: { category: category, categories: categories },
  };
};

export default Category;
