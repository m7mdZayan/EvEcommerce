import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./login.css";
import axios from "axios";
import { userContext } from "../../context/userContext";
import { useHistory } from "react-router-dom";

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
  const [userData, setUserData] = useContext(userContext);
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [showErrorMessage, setshowErrorMessage] = useState(false);

  const handleSubmit = async () => {
    const loginData = {
      email,
      password,
    };
    try {
      const res = await axios.post(
        "http://localhost:3000/api/login",
        loginData
      );
      setUserData((d) => ({
        authenticated: true,
        userToken: res.data.userToken,
        userName: res.data.userName,
      }));
      history.push("/");
    } catch (e) {
      seterrorMessage(e.response);
      console.log(e);
      setshowErrorMessage(true);
    }
  };

  return (
    <div className="form__container">
      <form className={classes.root} noValidate autoComplete="off">
        {showErrorMessage ? <p className="form_error">{errorMessage}</p> : null}

        <TextField
          label="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={handleSubmit}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
