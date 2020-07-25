import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Alert} from '@material-ui/lab';

import { useParams } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  tables: {
    minWidth: 650,
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



function EmployeeCard() {

  
  const [employee, setEmployee] = useState({});

  const { id } = useParams();

  const [statusText, setStatusText] = useState("");

  useEffect(() => {
  

    const url =`http://localhost:53337/api/Employee/GetEmployeeById?id=${id}`
      
    fetch(url)
      .then(function (response) {
        if (response.ok) {
          console.log("response", response);
          setStatusText(response.statusText);
          if(response.statusText==="OK"){
            response.json().then((json) => { 
              console.log("json ", json);        
              setEmployee(json);
              
            });
          }else{
            alert("Usuario no existe")
          }
         
        }
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, [id]);

  const classes = useStyles();
  return (
    (statusText==="OK")?
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Name: {employee.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Contract type: {employee.contractTypeName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Role Id: {employee.roleId}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Role Name: {employee.roleName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Role Description: {employee.roleDescription}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Hourly Salary: {employee.hourlySalary}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Monthly Salary: {employee.monthlySalary}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Annual Salary: {employee.annualSalary}
        </Typography>
      </CardContent>
    </CardActionArea>
    {/* <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions> */}
  </Card>:
  <Alert severity="warning">User Not Found</Alert>
  

      
  );
}

export default EmployeeCard;
