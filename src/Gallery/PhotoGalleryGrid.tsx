import { Grid, makeStyles } from "@material-ui/core";
import { mainDisplayWidth } from "../App";
import { PhotoGalleryCard } from "./PhotoGalleryCard";

const photoGridFileNames = [
  "sam-first-articulation.jpg",
  "sam_with-some-articulation.jpg",
  "sam_in_shambles.jpg",
  "sam_pose.jpeg"
];

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: mainDisplayWidth + 16,
        margin: 'auto',
        paddingTop: 56
    },
    item: {
      padding: 8
    }
}));

export function PhotoGalleryGrid(): JSX.Element {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                {photoGridFileNames.map(function(name: string, _index: number){
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
