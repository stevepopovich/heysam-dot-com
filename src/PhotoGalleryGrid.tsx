import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { PhotoGalleryCard } from "./PhotoGalleryCard";
import { mainDisplayWidth } from "./App";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: mainDisplayWidth + 16,
        margin: 'auto'
    },
    item: {
      padding: 8
    }
}));

export function PhotoGalleryGrid(props: any): JSX.Element {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                {props.fileNames.map(function(name: string, _index: number){
                    return (
                        <Grid key={name} item xs={12} sm={6} className={classes.item}>
                          <PhotoGalleryCard fileName={name}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
