import React from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import { mainDisplayWidth } from "./App";

const useStyles = makeStyles(() => ({
    container: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '35%',
      margin: 'auto',
      maxWidth: mainDisplayWidth / 2,
      height: 0,
      marginTop: 16,
      minHeight: 250
    },
    video: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
    },
  }));

export function SamTourVideo(): JSX.Element {
    const classes = useStyles();

    return (
      <div className={classes.container}>
        <iframe
          className={classes.video}
          src="https://www.youtube.com/embed/79y4ca6NaXw"
          title="SamTourVideo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </div>
    )
}
