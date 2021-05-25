import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    appbar: {
      backgroundColor: 'black'
    },
  }));

export function SamHomeAppBar() {
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.appbar}>
          <Toolbar>
          <Typography variant="h6">
              👋 Hey Sam!
          </Typography>
          </Toolbar>
      </AppBar>
  )
}
