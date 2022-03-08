import React, { useState } from "react";
import styles from "../../../../styles/Ingredients.module.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useRouter } from "next/router";
import Image from "next/image";
import IngredientsButtons from "../../../../components/IngredientsButtons";
import { Button } from "@mui/material";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addCart } from "../../../../redux/action";

const Ingredients = ({ ingredientsData }) => {
  const router = useRouter();
  const { ingredientsId } = router.query;

  const results = ingredientsData.filter((el) => {
    return el.ID == ingredientsId;
  });

  const data = results[0];

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    router.push("/cart");
  };

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
                ing={el}
                ingID={el.ID}
                defaultQuantity={el.Quantity}
                MaxQuantity={el.MaxQuantity}
              />
            </div>{" "}
          </>
        ))}
      </div>
      <div className={styles.navigation__buttons}>
        <Link href="/categories" passHref>
          <Button className={styles.navigation__button} variant="contained">
            Back
          </Button>
        </Link>

        <Button
          className={styles.navigation__button}
          onClick={() => addProduct(data)}
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
