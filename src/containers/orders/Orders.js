import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Orders() {
  const classes = useStyles();

  const [orders, setOrders] = useState([]);

  useEffect(() => getOrders(), []);

  const getOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/orders/my-orders",
        {
          headers: {
            "x-auth-token": localStorage.getItem("userToken"),
          },
        }
      );
      setOrders(res.data);
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <TableContainer component={Paper} style={{ margin: "50px 10px" }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Order ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Order Date</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>State</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Products</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell component="th" scope="row">
                {order._id}
              </TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.state}</TableCell>
              <TableCell>
                {order.products.map((product) => `- ${product.name} -`)}
              </TableCell>
              <TableCell>{order.totalPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Orders;
