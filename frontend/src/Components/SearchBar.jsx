import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
    flexGrow: 1,
    margin: 20,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function SearchBar(props) {
  const classes = useStyles();
  const tableBtn = (e) => {
    e.preventDefault();
    const localUrl = id ? `/employee/${id}` : "/employees";
    props.history.push(localUrl);
  };
  const [id, setId] = useState();

  const addValuesToMemory = (e) => {
    const { value } = e.target;
    setId(value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={1} alignItems="center">
        <TextField
          id="outlined-basic"
          label="Search Employee"
          variant="outlined"
          onChange={addValuesToMemory}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#3b6978" }}
          size="large"
          className={classes.button}
          startIcon={<SearchIcon />}
          onClick={tableBtn}
          type="submit"
        >
          Get Employees
        </Button>
      </Grid>
    </form>
  );
}
export default withRouter(SearchBar);
