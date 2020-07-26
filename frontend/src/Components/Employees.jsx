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
    margin: "auto",
  },
});

function TableEmployees() {

  const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits:2
  })
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
    <TableContainer component={Paper} style={{backgroundColor:"#e4e3e3", maxWidth:"70%", margin:"auto"}}>
      <Table className={classes.tables} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:"#84a9ac",minHeight:"100%"}}>
            <TableCell>Name</TableCell>
            <TableCell align="right">Contract TypeName</TableCell>
            <TableCell align="right">Role Id</TableCell>
            <TableCell align="right">Role Name</TableCell>
            <TableCell align="right">Role Description</TableCell>
            <TableCell align="right">Hourly Salary</TableCell>
            <TableCell align="right">Monthly Salary</TableCell>
            <TableCell align="right">Annual Salary</TableCell>
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
                <TableCell align="right">{formatter.format(row.hourlySalary)}</TableCell>
                <TableCell align="right">{formatter.format(row.monthlySalary)}</TableCell>
                <TableCell align="right">{formatter.format(row.annualSalary)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableEmployees;
