import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import { userContext } from "../../context/userContext";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    position: "relative",
  },
});

function Product({ product }) {
  const classes = useStyles();

  const [userData] = useContext(userContext);
  const [disableButton, setDisableButton] = useState(false);

  const addToCart = (product) => {
    product.amount = 1;
    userData.userCart.push(product);
    localStorage.setItem("userCart", JSON.stringify(userData.userCart));
    setDisableButton(true);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={product.photo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
            {/* Prdouct name   */}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
            {/* Prdouct description   */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          disabled={!userData.authenticated || disableButton}
          size="small"
          color="primary"
          variant="contained"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
        <Badge
          style={{
            position: "absolute",
            right: "12%",
            bottom: "8%",
          }}
          badgeContent={product.price + "EGP"}
          color="secondary"
        ></Badge>
      </CardActions>
    </Card>
  );
}

export default Product;
