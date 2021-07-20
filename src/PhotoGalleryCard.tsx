import { Card, CardMedia, makeStyles } from "@material-ui/core";
import { mainDisplayWidth } from "./App";

const useStyles = makeStyles(() => ({
    card: {
      maxWidth: mainDisplayWidth / 2,
      margin: 'auto',
      marginTop: 16
    },
    media: {
      height: 0,
      paddingTop: '75%'
    },
  }));

export function PhotoGalleryCard(props: any): JSX.Element {
    const classes = useStyles();

    const fullFileName = "/".concat(props.fileName);

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={fullFileName}
            />
        </Card>
    )
}
