import React from "react";
import { Card, CardMedia, makeStyles } from "@material-ui/core";
import { mainDisplayWidth } from "./App";

const useStyles = makeStyles(() => ({
    root: {
      padding: 8
    },
    card: {
      maxWidth: mainDisplayWidth,
      margin: 'auto',
      marginTop: 72
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));

export function MainFeatureCard(): JSX.Element {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image="/sam_pose.jpeg"
                title="Developer with all iterations of Sam (TODO)"
            />
        </Card>
      </div>
    )
}
