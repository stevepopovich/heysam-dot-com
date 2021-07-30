import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { bodyTextColor, footerColor } from "./App";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        backgroundColor: footerColor,
        paddingBottom: 16
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
    },
    buttonContainer: {
        width: '100%',
        display: 'flex'
    },
    githubButton: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    githubIcon: {
        fontSize: 64
    }
  }));

export function Footer(): JSX.Element {
    const classes = useStyles();
    const handleOnClick = () => window.open( "https://github.com/stevepopovich/sam/", "_blank");

    return (
      <div className={classes.root}>
        <Typography variant="h5" className={classes.subtitle}>
            Speaks for itself. Open source.
        </Typography>
        <div className={classes.buttonContainer}>
            <IconButton 
                aria-label="link to github open source" 
                component="span" 
                className={classes.githubButton}
                onClick={handleOnClick}
            >
                <GitHubIcon className={classes.githubIcon} />
            </IconButton>
        </div>
      </div>
    )
}
