import { Card, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import { accentDarker, attentionColor, bodyTextColor, mainDisplayWidth, textColor } from "./App";
import { MainFeatureCard } from "./MainFeatureCard";
import STLViewer from "stl-viewer";

const useStyles = makeStyles(() => ({
    title: {
      color: bodyTextColor,
      marginTop: 96,
      textAlign: 'center',
      fontWeight: 400,
      fontFamily: "Orbitron",
      marginLeft: 8,
      marginRight: 8
    },
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
        marginTop: 32
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
    stlSection: {
        backgroundColor: attentionColor,
        paddingTop: 16,
        paddingBottom: 24
    },
    stlCard: {
        maxWidth: mainDisplayWidth,
        margin: 'auto',
    },
    stlMedia: {
        margin: 'auto',
    },
    stlSectionSubitle: {
        color: bodyTextColor,
        marginTop: 16,
        marginBottom: 16,
        textAlign: 'center',
        fontWeight: 400,
        fontFamily: "Orbitron",
        marginLeft: 8,
        marginRight: 8
    }
  }));

export function HomePage(): JSX.Element {
    const classes = useStyles();
    const featureSetTypographySize = "h6";

    const lights = [-125, -125, 200];
    const STLwidth = Math.min(window.innerWidth - 16, mainDisplayWidth);
    const STLheight = STLwidth * (9/16);

    return (
        <div>
            <Typography variant="h3" className={classes.title}>
                Android + Arduino = Sam
            </Typography>
            <MainFeatureCard />
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
                        <Typography variant={featureSetTypographySize} className={classes.subtitles}>
                            ✨ Ultrasonic range finding
                        </Typography>
                        <Typography variant={featureSetTypographySize} className={classes.subtitles}>
                            📱 100% Kotlin app and highly tested
                        </Typography>
                        <Typography variant={featureSetTypographySize} className={classes.subtitles}>
                            ⚡️ Real time Arduino-Arduino communication
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
            <div className={classes.stlSection}>
                <Typography variant="h4" className={classes.stlSectionSubitle}>
                    Get up close and personal.
                </Typography>
                <Card className={classes.stlCard}>
                    <STLViewer
                        className={classes.stlMedia}
                        url='sam_7_0_0.stl'
                        height={STLheight}
                        width={STLwidth}
                        modelColor='#32CD32'
                        backgroundColor='#FFFFFF'
                        cameraY={-15}
                        cameraZ={0}
                        cameraX={0}
                        rotate={true}
                        orbitControls={true}
                        lights={lights}
                        model='sam_7_0_0.stl'
                    />
                </Card>
            </div>
        </div>
    )
}