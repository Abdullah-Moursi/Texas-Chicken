import React from "react";
import styles from "../../../../styles/Ingredients.module.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useRouter } from "next/router";
import Image from "next/image";
import IngredientsButtons from "../../../../components/IngredientsButtons";
import { Button } from "@mui/material";
import Link from "next/link";

const Ingredients = ({ ingredientsData }) => {
  const router = useRouter();
  const { ingredientsId } = router.query;

  const results = ingredientsData.filter((el) => {
    return el.ID == ingredientsId;
  });

  const data = results[0];
  console.log(data.Ingridents);

  return (
    <div className={styles.ingredients}>
      <div className={styles.ingredients__header}>
        <h1>{data.Name}</h1>
        <p>{data.Description}</p>
      </div>
      <div className={styles.ingredients__title}>
        <div className={styles.ingredients__icon}>
          <RestaurantIcon />
        </div>
        <p>INGREDIENTS</p>
      </div>
      <div className={styles.ingredients__container}>
        {data.Ingridents.map((el) => (
          <>
            <div className={styles.ingredient}>
              <Image
                key={el.ID}
                alt={el.Name}
                height={50}
                width={50}
                src={el.ImagePath}
              />
              <p> {el.Name} </p>
              <p>SAR {el.Price} </p>
              <IngredientsButtons
                defaultQuantity={el.Quantity}
                MaxQuantity={el.MaxQuantity}
              />
            </div>{" "}
          </>
        ))}
      </div>
      <div className={styles.navigation__buttons}>
        <Link href="/categories" passHref>
          <Button className={styles.navigation__button} variant="contained">Back</Button>
        </Link>

        <Button
        className={styles.navigation__button}
          // onClick={
          //   programatically navigation to cart
          // }
          variant="contained"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Ingredients;

export const getServerSideProps = async (context) => {
  const { categoryId } = context.params;
  const res = await fetch(
    `https://task-api-eosin.vercel.app/api/products?catID=${categoryId}`
  );
  const ingredientsData = await res.json();
  return {
    props: {
      ingredientsData,
    },
  };
};

// export const getStaticProps = async (context) => {
//     const {id} = context.params
//     const res = await fetch(`https://task-api-eosin.vercel.app/api/products?catID=${id}`);
//     const categories = await res.json();

//     return {
//       props: {
//         categories,
//       },
//     };
//   };
