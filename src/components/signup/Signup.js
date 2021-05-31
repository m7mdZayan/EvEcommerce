import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

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
    width: "150px",
    padding: "10px",
  },
}));

const Signup = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [showErrorMessage, setshowErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccessMessage, setshowSuccessMessage] = useState(false);

  const handleSubmit = async () => {
    const signupData = {
      name,
      email,
      password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/users",
        signupData
      );
      setSuccessMessage("Your Account created Succesfully");
      setshowSuccessMessage(true);
      setshowErrorMessage(false);
      //   setTimeout(() => {
      //     history.push("/login");
      //   }, 1500);
    } catch (e) {
      seterrorMessage(e.response.data.message);
      setshowErrorMessage(true);
      setshowSuccessMessage(false);
    }
  };

  return (
    <div className="form__container">
      <form className={classes.root} noValidate autoComplete="off">
        {showSuccessMessage ? (
          <p className="form_success">{successMessage}</p>
        ) : null}

        {showErrorMessage ? <p className="form_error">{errorMessage}</p> : null}

        <TextField
          label="name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
