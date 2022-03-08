import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styles from "../styles/IngredientsButtons.module.css";

const IngredientsButtons = ({ defaultQuantity, MaxQuantity, ingID, ing }) => {
  const [counter, setCounter] = useState(defaultQuantity);

  const handleIncrement = () => {
    counter < MaxQuantity && setCounter((state) => state + 1);
  };
  const handleDecrement = () => {
    counter > 0 && setCounter((state) => state - 1);
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
