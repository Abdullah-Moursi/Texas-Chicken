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
import { delCart } from "../redux/action";
import { useSelector } from "react-redux";

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
    dispatch(delCart(product));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
                <DeleteForeverRoundedIcon onClick={() => delProduct(row)} />
                <Image
                  src={row.ImagePath}
                  height={50}
                  width={50}
                  alt={row.ID}
                />
              </StyledTableCell>
              <StyledTableCell align="left">{row.Name}</StyledTableCell>
              <StyledTableCell align="left">{row.DefaultPrice}</StyledTableCell>
              <StyledTableCell align="left">{row.qty}</StyledTableCell>
              <StyledTableCell align="left">
                {row.DefaultPrice * row.qty}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
