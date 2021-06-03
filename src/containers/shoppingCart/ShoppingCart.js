import React, { useContext, useEffect, useState } from "react";
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
  const [userData, setUserData] = useContext(userContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(userData.userCart);
  }, [userData]);

  const classes = useStyles();

  const increaseQuantity = (product) => {
    product.amount++;
    setUserData({ ...userData, userCart: products });
  };

  const decreaseQuantity = (product) => {
    if (product.amount === 1) {
      let newProducts = products.filter((pro) => pro._id !== product._id);
      setProducts(newProducts);
      console.log(products);
      setUserData({ ...userData, userCart: newProducts });
    } else {
      product.amount--;
      setUserData({ ...userData, userCart: products });
    }
    console.log(products);
  };

  return (
    <div style={{ minHeight: "75vh", padding: " 20px 0 " }}>
      {products.length > 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>
                  Product Name
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Product Description
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Price</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Quantity</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>+ / -</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Total Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.amount}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => increaseQuantity(product)}
                      style={{ marginRight: "5px" }}
                    >
                      +
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => decreaseQuantity(product)}
                    >
                      -
                    </Button>
                  </TableCell>
                  <TableCell> {product.price * product.amount} EGP</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "#f00",
            fontSize: "24px",
            margin: "50px 0",
          }}
        >
          your cart is empty
        </p>
      )}
    </div>
  );
};

export default ShoppingCart;
