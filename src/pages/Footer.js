import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image from './images/fb.jpg';
import image1 from './images/git.png';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:"40px",
    overflow:"hidden"
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    backgroundColor:'#003099',
    color:'white'
    
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>&copy; Developed by Zeeshan Malik 
          <div style={{float:'right', margin:'-15px', marginRight:'20px'}}>
          <span style={{marginRight:'20px'}}>Follow on</span><a href="https://www.facebook.com/zeshanali.zeshanali.735">
          <img  src={image} alt="Facebook" width='20px' height='20px' /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/zeeshan526/Covid-19"><img  src={image1} alt="Github" width='20px' height='20px' /></a>
          </div></Paper>
        </Grid>

    
      </Grid>
    </div>
  );
}

