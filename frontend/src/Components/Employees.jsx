import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  tables: {
    minWidth: 650,
  },
});

function TableEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const url = "http://localhost:53337/api/Employee/GetAllEmployees";
    fetch(url)
      .then(function (response) {
        if (response.ok) {
          response.json().then((json) => {
            setEmployees(json);          
          });
        }
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, []);

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.tables} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">contractTypeName</TableCell>
            <TableCell align="right">roleId</TableCell>
            <TableCell align="right">roleName</TableCell>
            <TableCell align="right">roleDescription</TableCell>
            <TableCell align="right">hourlySalary</TableCell>
            <TableCell align="right">monthlySalary</TableCell>
            <TableCell align="right">annualSalary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees &&
            employees.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.contractTypeName}</TableCell>
                <TableCell align="right">{row.roleId}</TableCell>
                <TableCell align="right">{row.roleName}</TableCell>
                <TableCell align="right">{row.roleDescription}</TableCell>
                <TableCell align="right">{row.hourlySalary}</TableCell>
                <TableCell align="right">{row.monthlySalary}</TableCell>
                <TableCell align="right">{row.annualSalary}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableEmployees;
