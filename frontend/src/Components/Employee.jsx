import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import Avatar from "@material-ui/core/Avatar";
import { useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DraggableDialog from "./Alert"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
    marginTop: "2%",
    paddingTop: "1%",
    backgroundColor: "#84a9ac",
  },
  large: {
    width: 200,
    height: 200,
    margin: "auto",
  },
});
function EmployeeCard() {

  const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits:2
  })
  
  const [employee, setEmployee] = useState({});

  const { id } = useParams();

  const [statusText, setStatusText] = useState("");

  useEffect(() => {
    const url = `http://localhost:53337/api/Employee/GetEmployeeById?id=${id}`;

    fetch(url)
      .then(function (response) {
        if (response.ok) {
          console.log("response", response);
          setStatusText(response.statusText);
          if (response.statusText === "OK") {
            response.json().then((json) => {
              console.log("json ", json);
              setEmployee(json);
            });
          } else {
            DraggableDialog();
          }
        }
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, [id]);

  const classes = useStyles();
  return statusText === "OK" ? (
    <Card className={classes.root}>
      <CardActionArea>
       <Avatar
          alt="Remy Sharp"
          src={require("../img/default-avatar.jpg")}
          className={classes.large}
        />
        <CardContent style={{ color: "black" }}>
          <Typography gutterBottom variant="h5" component="h1">
            <b>Name:</b> {employee.name}
          </Typography>
          <Typography variant="body2" component="p">
          <b>Contract type:</b> {employee.contractTypeName}
          </Typography>
          <Typography variant="body2" component="p">
          <b>Role Id:</b> {employee.roleId}
          </Typography>
          <Typography variant="body2" component="p">
          <b>Role Name:</b> {employee.roleName}
          </Typography>
          <Typography variant="body2" component="p">
          <b> Role Description:</b> {employee.roleDescription}
          </Typography>
          <Typography variant="body2" component="p">
          <b>Hourly Salary:</b> {formatter.format(employee.hourlySalary)}
          </Typography>
          <Typography variant="body2" component="p">
          <b> Monthly Salary:</b> {formatter.format(employee.monthlySalary)}
          </Typography>
          <Typography variant="body2" component="p">
          <b>Annual Salary:</b> {formatter.format(employee.annualSalary)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ) : (
    <div>
    <DraggableDialog/>
    <Alert
      severity="warning"
      style={{ margin: "auto", marginTop: "5%", maxWidth: "400px" }}
    >
      User Not Found
    </Alert>
    </div>
  );
}


export default EmployeeCard;
