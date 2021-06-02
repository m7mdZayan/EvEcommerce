import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { userContext } from "../../context/userContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#fff",
  },
  Button: {
    marginRight: theme.spacing(2),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [userData, setUserData] = useContext(userContext);
  let history = useHistory();

  const handleLogout = () => {
    setUserData({ userToken: "", authenticated: false, userName: "" });
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.title}>
              ECommerce App
            </Link>
          </Typography>

          {userData.authenticated !== true ? (
            <>
              <Button variant="contained" className={classes.Button}>
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="contained">
                <Link to="/signup">Sign up</Link>
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h6" className={classes.title}>
                Hello, {userData.userName}
              </Typography>
              <Button variant="contained" className={classes.Button}>
                <Link to="/login">Shopping Cart</Link>
              </Button>
              <Button variant="contained" onClick={handleLogout}>
                Log out
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
