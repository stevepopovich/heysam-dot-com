import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { HideOnScroll } from "./HideOnScroll";

const useStyles = makeStyles(() => ({
    appbar: {
      backgroundColor: 'black',
      height: 72
    },
  }));

export function SamHomeAppBar() {
  const classes = useStyles();

  return (
    <HideOnScroll>
      <AppBar className={classes.appbar} >
          <Toolbar>
          <Typography variant="h6">
              👋 Hey Sam!
          </Typography>
          </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
