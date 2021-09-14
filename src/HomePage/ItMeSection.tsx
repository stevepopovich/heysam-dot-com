import { Card, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { bodyTextColor, mainDisplayWidth } from "../App";

const useStyles = makeStyles(() => ({
    subtitle: {
        color: bodyTextColor,
        marginTop: 16,
        marginBottom: 16,
        textAlign: 'center',
        fontWeight: 400,
        fontFamily: "Orbitron",
        marginLeft: 8,
        marginRight: 8
    },
    root: {
    },
    card: {
      maxWidth: mainDisplayWidth,
      margin: 'auto',
      marginTop: 16,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));

export function ItMeSection(): JSX.Element {
    const classes = useStyles();

    return (
        <div> 
            <Typography variant="h4" className={classes.subtitle}>
                Made with ❤️
            </Typography>
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="/it-me-holding-sam.jpg"
                        title="Developer with all iterations of Sam"
                    />
                </Card>
            </div>
        </div>
    )
}
