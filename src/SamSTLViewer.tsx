
import { Card, makeStyles } from "@material-ui/core";
import STLViewer from "stl-viewer";
import { mainDisplayWidth } from "./App";

const useStyles = makeStyles(() => ({
    root: {
      padding: 8,
      paddingTop: 64
    },
    card: {
      maxWidth: mainDisplayWidth,
      marginTop: 16,
      margin: 'auto',
    },
    media: {
      margin: 'auto'
    },
  }));

export function SamSTLViewer(props: any): JSX.Element {
    const classes = useStyles();

    const lights = [-125, -125, 200];
    const width = Math.min(window.innerWidth - 16, mainDisplayWidth);
    const height = width * (9/16);

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
            <STLViewer
              className={classes.media}
              url='sam_7_0_0.stl'
              height={height}
              width={width}
              modelColor='#32CD32'
              backgroundColor='#FFFFFF'
              cameraY={-15} // -15
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
