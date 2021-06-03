import React, { useContext } from "react";
import { userContext } from "../../context/userContext";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ShoppingCart = () => {
  const [userData] = useContext(userContext);

  const classes = useStyles();

  return (
    <div style={{ minHeight: "75vh", padding: " 20px 0 " }}>
      {userData.userCart.length > 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>+ / -</TableCell>
                <TableCell>Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.userCart.map((product) => (
                <TableRow key={product._id}>
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.amount}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
                      +
                    </Button>
                    <Button variant="contained" color="secondary">
                      -
                    </Button>
                  </TableCell>
                  <TableCell> {300} EGP</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>your cart is empty</p>
      )}
    </div>
  );
};

export default ShoppingCart;
