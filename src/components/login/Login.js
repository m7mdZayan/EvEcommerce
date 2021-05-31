import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./login.css";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },

  btn: {
    marginTop: "20px",
    width: "140px",
    padding: "10px",
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div className="form__container">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField label="email" variant="outlined" />
        <TextField label="password" type="password" variant="outlined" />
        <Button variant="contained" color="primary" className={classes.btn}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
