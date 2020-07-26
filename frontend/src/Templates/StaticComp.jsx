import React from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#e4e3e3",
    width: "100%",
  },
});

function StaticTemplate() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <SearchBar />
    </div>
  );
}

export default StaticTemplate;
