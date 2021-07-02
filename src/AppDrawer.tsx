import { Drawer, makeStyles } from "@material-ui/core";
import React from "react";
import { accentLighter, mainDisplayWidth } from "./App";

const useStyles = makeStyles(() => ({
    drawer: {
      backgroundColor: accentLighter,
      width: 256
    },
  }));

export function SamAppDrawer(props: any): JSX.Element {
  const classes = useStyles();

  return (
    <Drawer anchor="left" open={props.drawerOpen} className={classes.drawer}>
    </Drawer>
  )
}
