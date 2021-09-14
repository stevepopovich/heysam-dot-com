import { makeStyles } from "@material-ui/core";
import { mainDisplayWidth } from "../App";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: mainDisplayWidth,
    marginTop: 32, 
    marginBottom: 32,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  card: {
    position: 'relative',
    paddingTop: '56.25%', // 16:9
  },
  media: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  }));

export function MainFeatureCard(): JSX.Element {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <div className={classes.card}>
            <iframe
              className={classes.media}
              src="https://www.youtube.com/embed/t2S_PSkZUTg?modestbranding=1&autohide=1&mute=1&showinfo=1&controls=0&autoplay=1"
              title="Sam Teaser Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen 
            />
          </div>
        </div>

    )
}
