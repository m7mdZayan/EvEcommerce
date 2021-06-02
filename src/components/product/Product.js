import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    position: "relative",
  },
});

function Product({ name, description, price, photo }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={photo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
            {/* Prdouct name   */}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
            {/* Prdouct description   */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          Add to Cart
        </Button>
        <Badge
          style={{
            position: "absolute",
            right: "12%",
            bottom: "8%",
          }}
          badgeContent={price + "EGP"}
          color="secondary"
        ></Badge>
      </CardActions>
    </Card>
  );
}

export default Product;
