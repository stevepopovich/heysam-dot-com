import { Box, Card, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import { accentDarker, bodyTextColor, mainDisplayWidth, textColor } from "../App";

const useStyles = makeStyles(() => ({
    gridSection: {
        backgroundImage: 'url(sam-background.jpg)',
        minHeight: '500px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        marginTop: 16,
        paddingBottom: 16
    },
    gridContainer: {
        maxWidth: mainDisplayWidth,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    subtitleTop: {
        color: bodyTextColor,
        marginLeft: 16,
        marginRight: 8,
    },
    subtitles: {
        color: bodyTextColor,
        marginLeft: 16,
        marginRight: 8,
        marginTop: 8,
    },
    textContainers: {
        background: '#FFFFFF',
        marginTop: 40,
        paddingTop: 32,
        paddingBottom: 32
    },
    card: {
        margin: 'auto',
        marginTop: 16,
        marginBottom: 16
    },
    media: {
        height: 0,
        paddingTop: '75%',
    },
}));

export function SamInfoSection(): JSX.Element {
    const classes = useStyles();
    const featureSetTypographySize = "h6";

    return (
        <div className={classes.gridSection}>
            <Grid container className={classes.gridContainer}>
                <Grid key="photo1" item xs={false} sm={5}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="sam_pose.jpeg"
                        />
                    </Card>
                </Grid>
                <Grid key="subtitle1" item xs={12} sm={7}>
                    <div className={classes.textContainers}>
                        <Typography variant={featureSetTypographySize} className={classes.subtitleTop}>
                            🤖 Continuous voice and vision processing
                        </Typography>
                        <Typography variant={featureSetTypographySize} className={classes.subtitles}>
                            🖨 Custom 3D printed chassis
                        </Typography>
                        <Typography variant={featureSetTypographySize} className={classes.subtitles}>
                            🚜 Digital tank drivetrain 
                        </Typography>
                    </div>
                </Grid>
                <Grid key="photo1" item xs={12}>
                    <Box component="div" display={{ xs: 'block', sm: 'none' }}>
                        <Card className={classes.card} >
                            <CardMedia
                                className={classes.media}
                                image="sam_pose.jpeg"
                            />
                        </Card>
                    </Box>
                </Grid>
                <Grid key="subtitle2" item xs={12} sm={7}>
                    <div className={classes.textContainers}>
                        <Typography variant={featureSetTypographySize} className={classes.subtitleTop}>
                            ✨ Ultrasonic range finding
                        </Typography>
                        <Typography variant={featureSetTypographySize} className={classes.subtitles}>
                            📱 Highly tested, 100% Kotlin app
                        </Typography>
                        <Typography variant={featureSetTypographySize} className={classes.subtitles}>
                            ⚡️ Real time Arduino-Android communication
                        </Typography>
                    </div>
                </Grid>
                <Grid key="photo2" item xs={12} sm={5}>
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

