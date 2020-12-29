import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  /* Title is for Text Covid-19 Tracker */
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  MuiAppBarColorPrimary: {
    color: '#fff',
    backgroundColor: 'rgb(142, 36, 170);',
  },
}));

function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.MuiAppBarColorPrimary}>
          <Typography className={classes.title} variant="h6" noWrap>
            Covid-19 Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SearchAppBar;

/*
SearchBar:::
https://material-ui.com/components/app-bar/

Material UI Github:::
https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Select/SelectInput.js
*/