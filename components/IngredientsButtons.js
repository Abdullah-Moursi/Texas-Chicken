import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styles from "../styles/IngredientsButtons.module.css";

const IngredientsButtons = ({ currentProduct, setCurrProduct, ing }) => {
  const [counter, setCounter] = useState(1);

  const getUpdatedIngredients = (value) =>
    currentProduct.Ingridents.map((el) => {
      if (el.ID === ing.ID) {
        return {
          ...el,
          Quantity: el.Quantity + value,
        };
      } else {
        return el;
      }
    });

  const handleIncrement = () => {
    if (counter < ing.MaxQuantity) {
      setCounter((state) => state + 1);
      setCurrProduct({
        ...currentProduct,
        Ingridents: getUpdatedIngredients(1),
      });
    }
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter((state) => state - 1);
      setCurrProduct({
        ...currentProduct,
        Ingridents: getUpdatedIngredients(-1),
      });
    }
  };

  return (
    <ButtonGroup
      className={styles.button__group}
      size="small"
      aria-label="small outlined button group"
    >
      {" "}
      <Button className={styles.ingredients__button} onClick={handleDecrement}>
        -
      </Button>
      <Button id={styles.ingredients__button__input} disabled>
        {counter}
      </Button>
      <Button className={styles.ingredients__button} onClick={handleIncrement}>
        +
      </Button>
    </ButtonGroup>
  );
};

export default IngredientsButtons;
