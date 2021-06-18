import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { HideOnScroll } from "./HideOnScroll";

const appBarHeight = 72;

const useStyles = makeStyles(() => ({
    appbar: {
      backgroundColor: 'black',
      height: appBarHeight
    },
    underConstruction: {
      right: 0,
      position: 'absolute'
    }
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
          <img src="/under-construction.png" height={appBarHeight} className={classes.underConstruction}/>
          </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
