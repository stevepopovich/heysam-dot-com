import { Drawer, makeStyles } from "@material-ui/core";
import React from "react";
import { mainDisplayWidth } from "./App";

const useStyles = makeStyles(() => ({
    drawer: {
      backgroundColor: "black",
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
