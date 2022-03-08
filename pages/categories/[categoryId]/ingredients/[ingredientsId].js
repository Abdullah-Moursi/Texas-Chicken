import React, { useEffect, useState } from "react";
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
  const [currentProduct, setCurrProduct] = useState(null);
  const dispatch = useDispatch();

  const singleProduct = ingredientsData.find((el) => {
    return el.ID == ingredientsId;
  });
  console.log(currentProduct);

  useEffect(() => {
    setCurrProduct(singleProduct);
  }, [singleProduct]);

  const addProduct = () => {
    dispatch(addCart(currentProduct));
    router.push("/cart");
  };

  return (
    <div className={styles.ingredients}>
      <div className={styles.ingredients__header}>
        <h1>{currentProduct?.Name}</h1>
        <p>{currentProduct?.Description}</p>
      </div>
      <div className={styles.ingredients__title}>
        <div className={styles.ingredients__icon}>
          <RestaurantIcon />
        </div>
        <p>INGREDIENTS</p>
      </div>
      <div className={styles.ingredients__container}>
        {currentProduct?.Ingridents?.map((el) => (
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
                currentProduct={currentProduct}
                setCurrProduct={setCurrProduct}
                ing={el}
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
          onClick={() => addProduct()}
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
