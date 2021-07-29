import { Card, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import { accentDarker, mainDisplayWidth, textColor } from "../App";

const useStyles = makeStyles(() => ({
    gridSection: {
        backgroundColor: accentDarker,
        marginTop: 16,
        paddingBottom: 16
    },
    gridContainer: {
        maxWidth: mainDisplayWidth,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    subtitleTop: {
        color: textColor,
        marginLeft: 16,
        marginTop: 48
    },
    subtitles: {
        color: textColor,
        marginLeft: 16,
        marginTop: 8
    },
    card: {
        maxWidth: 300,
        margin: 'auto',
        marginTop: 16,
    },
    media: {
        height: 0,
        paddingTop: '75%'
    },
}));

export function SamInfoSection(): JSX.Element {
    const classes = useStyles();
    const featureSetTypographySize = "h6";

    return (
        <div className={classes.gridSection}>
            <Grid container className={classes.gridContainer}>
                <Grid key="subtitle1" item xs={12} sm={8}>
                    <Typography variant={featureSetTypographySize} className={classes.subtitleTop}>
                        🤖 Continuous voice and vision processing
                    </Typography>
                    <Typography variant={featureSetTypographySize} className={classes.subtitles}>
                        🖨 Custom 3D printed chassis
                    </Typography>
                    <Typography variant={featureSetTypographySize} className={classes.subtitles}>
                        🚜 Digital tank drivetrain 
                    </Typography>
                </Grid>
                <Grid key="photo1" item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="sam_pose.jpeg"
                        />
                    </Card>
                </Grid>
                <Grid key="subtitle2" item xs={12} sm={8}>
                    <Typography variant={featureSetTypographySize} className={classes.subtitleTop}>
                        ✨ Ultrasonic range finding
                    </Typography>
                    <Typography variant={featureSetTypographySize} className={classes.subtitles}>
                        📱 Highly tested, 100% Kotlin app
                    </Typography>
                    <Typography variant={featureSetTypographySize} className={classes.subtitles}>
                        ⚡️ Real time Arduino-Android communication
                    </Typography>
                </Grid>
                <Grid key="photo2" item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="sam_in_shambles.jpg"
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

