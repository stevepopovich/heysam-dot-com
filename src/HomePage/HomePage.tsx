import { makeStyles, Typography } from "@material-ui/core";
import { bodyTextColor, mainDisplayWidth } from "../App";
import { MainFeatureCard } from "./MainFeatureCard";
import { SamInfoSection } from "./SamInfoSection";
import { SamSTLViewerSection } from "./SamSTLViewerSection";
import { VideoFeatureSection } from "./VideoFeatureSection";

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
    subtitle: {
        color: bodyTextColor,
        marginTop: 8,
        textAlign: 'center',
        fontWeight: 100,
        fontFamily: "Orbitron",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: mainDisplayWidth
    }
  }));

export function HomePage(): JSX.Element {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h3" className={classes.title}>
                Man's New Best Friend. 
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
                The World's First Arduino-Android Powered Robot.
            </Typography>
            <MainFeatureCard />
            <SamInfoSection />
            <SamSTLViewerSection />
            <VideoFeatureSection />
        </div>
    )
}