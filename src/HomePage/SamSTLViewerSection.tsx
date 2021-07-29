
import { Card, makeStyles, Typography } from "@material-ui/core";
import STLViewer from "stl-viewer";
import { attentionColor, bodyTextColor, mainDisplayWidth } from "../App";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: attentionColor,
    paddingTop: 16,
    paddingBottom: 24
  },
  card: {
      maxWidth: mainDisplayWidth,
      margin: 'auto',
  },
  media: {
      margin: 'auto',
  },
  subtitle: {
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

export function SamSTLViewerSection(): JSX.Element {
    const classes = useStyles();

    const lights = [-125, -125, 200];
    const width = Math.min(window.innerWidth - 16, mainDisplayWidth);
    const height = width * (9/16);

    return (
      <div className={classes.root}>
        <Typography variant="h4" className={classes.subtitle}>
            Get up close and personal.
        </Typography>
        <Card className={classes.card}>
            <STLViewer
              className={classes.media}
              url='sam_7_0_0.stl'
              height={height}
              width={width}
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
    )
}
