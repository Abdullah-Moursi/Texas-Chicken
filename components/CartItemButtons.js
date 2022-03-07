import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styles from "../styles/IngredientsButtons.module.css";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";

const IngredientsButtons = ({ quantity, product }) => {
  const [counter, setCounter] = useState(quantity);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const decProduct = (product) => {
    dispatch(delCart(product));
  };

  const handleIncrement = () => {
    setCounter((state) => state + 1);
    addProduct(product);
  };
  const handleDecrement = () => {
    counter > 1 && setCounter((state) => state - 1);
    decProduct(product);
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
