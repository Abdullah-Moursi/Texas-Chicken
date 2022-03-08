import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "../styles/CartContentsTable.module.css";
import Image from "next/image";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import { useDispatch } from "react-redux";
import { removeItem } from "../redux/action";
import { useSelector } from "react-redux";
import IngredientsButtons from "./CartItemButtons";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CartContentsTable() {
  const state = useSelector((state) => state.handleCart);


  const dispatch = useDispatch();
  const delProduct = (product) => {
    dispatch(removeItem(product));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="left">PRODUCT</StyledTableCell>
            <StyledTableCell align="left">PRICE</StyledTableCell>
            <StyledTableCell align="left">QUANTITY</StyledTableCell>
            <StyledTableCell align="left">TOTAL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((row) => (
            <StyledTableRow key={row.Name}>
              <StyledTableCell component="th" scope="row">
                <div className={styles.cart__image__section}>
                  <div className={styles.delete__icon}>
                    <DeleteForeverRoundedIcon onClick={() => delProduct(row)} />
                  </div>
                  <Image
                    src={row.ImagePath}
                    height={100}
                    width={100}
                    alt={row.ID}
                  />
                </div>
              </StyledTableCell>
              <StyledTableCell align="left">
                <h3> {row.Name}</h3>

                {row.Ingridents.map((ing) => (
                  <div key={ing.ID} className={styles.cart__ingredients}>
                    <Image
                      src={ing.ImagePath}
                      height={30}
                      width={30}
                      alt={ing.Name}
                    />
                    <span>
                      {" "}
                     x {ing.Quantity} {ing.Name}{" "}
                    </span>
                  </div>
                ))}
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.DefaultPrice} SAR
              </StyledTableCell>
              <StyledTableCell align="left">
                <IngredientsButtons quantity={row.qty} product={row} />
              </StyledTableCell>
              <StyledTableCell align="left">
                {(row.DefaultPrice * row.qty).toFixed(2)} SAR
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
