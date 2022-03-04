import React from "react";
import styles from "../../../styles/Ingredients.module.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const Ingredients = ({ingredients}) => {
    console.log(ingredients)
  return (
    <div className={styles.ingredients}>
      <div className={styles.ingredients__header}>
        <h1>Title</h1>
        <p>description</p>
      </div>
      <div className={styles.ingredients__title}>
        <div className={styles.ingredients__icon}>
          <RestaurantIcon />
        </div>
        <p>INGREDIENTS</p>
      </div>
    </div>
  );
};

export default Ingredients;




// export const getServerSideProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch(`https://task-api-eosin.vercel.app/api/products?catID=${id}`);
//     const ingredients = await res.json();
  
//     return {
//       props: {
//         ingredients,
//       },
//     };
//   };
