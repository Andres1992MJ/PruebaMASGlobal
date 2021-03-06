import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  offset: {
    ...theme.mixins.toolbar, // min-height: 56px;
    marginBottom: "1rem", // margen opcional
  },
  bottom: {
    marginLeft: 20,
  },
}));

const Navbar = (props) => {
  const classes = useStyle();

  const homeBtn = (e) => {
    e.preventDefault();
    props.history.push("/");
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" style={{ backgroundColor: "#204051" }}>
        <Toolbar>
          <Typography variant="h5">MAS Global</Typography>

          <Fab
            variant="extended"
            size="medium"
            style={{ backgroundColor: "#3b6978" }}
            aria-label="add"
            className={classes.bottom}
            onClick={homeBtn}
          >
            <HomeIcon className={classes.extendedIcon} />
          </Fab>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </React.Fragment>
  );
};

export default withRouter(Navbar);
