import { makeStyles, Typography } from "@material-ui/core";
import { bodyTextColor } from "../App";
import { MainFeatureCard } from "./MainFeatureCard";
import { SamInfoSection } from "./SamInfoSection";
import { SamSTLViewerSection } from "./SamSTLViewerSection";

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
  }));

export function HomePage(): JSX.Element {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h3" className={classes.title}>
                Android + Arduino = Sam
            </Typography>
            <MainFeatureCard />
            <SamInfoSection />
            <SamSTLViewerSection />
        </div>
    )
}

// Speaks for itself. Open source