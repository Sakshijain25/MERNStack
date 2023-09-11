import logo from "./logo.svg";
import {Container, AppBar, Typography, Grow, Grid} from "@mui/material";
import ShowStudent from "./components/showStudent/showStudent.js";
import Create from "./components/createStudent/createStudent.js";
import "./App.css";
import React, { Component } from "react";
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center"> 
            Students Create & Show
          </Typography> 
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                <ShowStudent />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}               
              sx = {{'& > :not(style)': { m: 3 },}}
              >
                <AppBar className={classes.appBar} position="static" color="inherit">
                <Create />
                </AppBar>
              </Grid>

            </Grid>

          </Container>

        </Grow>
      </Container>
    </div>
  );
}

export default App;
