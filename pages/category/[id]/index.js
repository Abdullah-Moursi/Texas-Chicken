import React, { useState } from "react";
import styles from "../../../styles/Category.module.css";
import Product from "../../../components/Product";
import Sidebar from "../../../components/Sidebar";
import { useRouter } from "next/router";

const Category = ({ category, categories }) => {
  const router = useRouter();
  const {id} = router.query
  

  // console.log(categories.map(el => el.ID), 'id', id, categories.map(el => el.Name));

  return (
    <div className={styles.category__container}>
      <div className={styles.category__sidebar}>
       <Sidebar categories={categories} />
      </div>
      {
        categories.filter(el => el.ID === id)[0] &&
        categories.map(el => (
                   <h1 key={el.Name}>{el.Name}</h1>

        ))
      }
      <div className={styles.category__products}>
      <Product category={category}/></div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const resCategory = await fetch(
    `https://task-api-eosin.vercel.app/api/products?catID=${context.params.id}`
  );
  const category = await resCategory.json();

  const resCategories = await fetch(
    "https://task-api-eosin.vercel.app/api/categories"
  );
  const categories = await resCategories.json();

  return {
    props: { category, categories },
  };
};




// export const getStaticPaths = async () => {
//   const resCategory = await fetch(
//     `https://task-api-eosin.vercel.app/api/products`
//   );
//   const category = await resCategory.json();
// const ids = category.map(el => el.id)
// const paths = ids.map(id => {{
//   params: {
//     id: id.toString()
//   }
// }})
// return {
//   paths, fallback: false
// }

// const resCategories = await fetch(
//   "https://task-api-eosin.vercel.app/api/categories"
// );
// const categories = await resCategories.json();
// }

export default Category;
