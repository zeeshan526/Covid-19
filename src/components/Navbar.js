
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//import './navbar.css'

import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'unset',
    width: '100%'
  },
 
  
  title: {
   textDecoration: 'none',
  //  margin:'10px',
   marginLeft: '10px',

  //  textalign :'center'
   
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
         
          <Typography variant="h6" className={classes.title}>
          <Link to="/" style={{color: 'white', textDecoration: 'none'}} >Covid-19</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/Symptoms" style={{color: 'white', textDecoration: 'none' }}>Symptoms</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/Prevention" style={{color: 'white', textDecoration: 'none'}}>Preventions</Link>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
