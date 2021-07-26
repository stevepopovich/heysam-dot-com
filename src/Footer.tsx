import { makeStyles } from "@material-ui/core";
import { footerColor } from "./App";

const useStyles = makeStyles(() => ({
    root: {
        height: '128px',
        width: '100%',
        backgroundColor: footerColor,
        marginTop: '0px',
    },
  }));

export function Footer(): JSX.Element {
    const classes = useStyles();

    return (
      <div className={classes.root}>
      </div>
    )
}
