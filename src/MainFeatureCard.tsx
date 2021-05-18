import React from "react";
import { Card, CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    card: {
      maxWidth: 800,
      margin: 'auto',
      marginTop: 16
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));

export function MainFeatureCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image="/sam_pose.jpeg"
                title="Developer with all iterations of same (TODO)"
            />
        </Card>
    )
}