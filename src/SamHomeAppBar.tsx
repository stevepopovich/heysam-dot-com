import { AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { HideOnScroll } from "./HideOnScroll";
import { SamAppDrawer } from "./AppDrawer";
import { primaryColor, textColor } from "./App";

const appBarHeight = 64;

const useStyles = makeStyles(() => ({
    appbar: {
      backgroundColor: primaryColor,
      height: appBarHeight
    },
    underConstruction: {
      right: 0,
      position: 'absolute'
    },
    text: {
      color: textColor,
      textDecorationLine: 'underline',
      fontFamily: "Orbitron",
    },
    menuIcon: {
      color: textColor
    }
  }));

export function SamHomeAppBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    drawerOpen: false,
  });

  const toggleDrawer = (open: boolean) => () => {
    setState({ ...state, drawerOpen: open });
  }

  const closeDrawerIfOpen = () => {
    if (state.drawerOpen) {
      setState({ ...state, drawerOpen: false });
    }
  }

  return (
    <div
      onClick={closeDrawerIfOpen}
    >
      <SamAppDrawer drawerOpen={state.drawerOpen}/>
      <HideOnScroll>
        <AppBar className={classes.appbar} >
          <Toolbar>
          <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(!state.drawerOpen)}
              className={classes.menuIcon}
            >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.text}>
              Hey Sam!
          </Typography>
          <img
            src="/under-construction.png"
            alt="Banner that indicates that the website is stil under construction"
            height={appBarHeight}
            className={classes.underConstruction}
          />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  )
}
