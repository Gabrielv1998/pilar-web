import React, { useEffect } from "react";
import { Grid, Paper, Box, Avatar,Modal,Textfield } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TodoImg from "../../assets/images/todo.jpg";
import FetchlistImg from "../../assets/images/fetchlist.jpg";


import Typography from "@mui/material/Typography";
import { color } from "@mui/system";

const Dashboard = () => {

  
  const navigate = useNavigate();
  return (
    <Grid container spacing={3}>
      <Grid item md={12} xs={12}>
        <Paper sx={{ p: 2 }}>
          <Box>Dashboard</Box>
        </Paper>
      </Grid>
     
      
    </Grid>
  );
};
export default Dashboard;