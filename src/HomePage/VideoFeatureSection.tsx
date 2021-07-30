import { Grid, makeStyles, Typography } from "@material-ui/core";
import { mainDisplayWidth } from "../App";

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: '#484848',
        paddingTop: 16,
        paddingBottom: 16,
    },
    subtitle: {
        marginTop: 16,
        marginBottom: 16,
        textAlign: 'center',
    },
    videoContainer: {
        position: 'relative',
        overflow: 'hidden',
        margin: 8,
        maxWidth: mainDisplayWidth,
        height: 0,
        minHeight: 250,
        paddingTop: '20%', // 16:9
    },
    gridContainer: {
        maxWidth: mainDisplayWidth,
        marginLeft: 'auto',
        marginRight: 'auto'
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

export function VideoFeatureSection(): JSX.Element {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h2" className={classes.subtitle}>
                👀
            </Typography>   
            <Grid container className={classes.gridContainer}>
                <Grid key="video1" item xs={12} sm={6}>
                    <div className={classes.videoContainer}>
                        <iframe
                            className={classes.video}
                            src="https://www.youtube.com/embed/79y4ca6NaXw"
                            title="Sam Voice Command Videos"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen 
                        />
                    </div>
                </Grid>
                <Grid key="video2" item xs={12} sm={6}>
                    <div className={classes.videoContainer}>
                        <iframe
                            className={classes.video}
                            src="https://www.youtube.com/embed/ZQMYwdvd5IA"
                            title="Sam PID Face Tracking"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen 
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}