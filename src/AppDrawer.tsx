import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import { primaryColor, SamRoute, textColor } from "./App";
import HomeIcon from '@material-ui/icons/Home';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import {useHistory} from 'react-router-dom';

const drawerWidth = 256;
const useStyles = makeStyles(() => ({
    drawer: {
      backgroundColor: 'transparent',
      width: drawerWidth
    },
    list: {
      backgroundColor: primaryColor,
      width: drawerWidth,
      height: "100%"
    },
    listItem: {
      color: textColor
    }
  }));

export function SamAppDrawer(props: any): JSX.Element {
  const classes = useStyles();

  const history = useHistory();
  const handleOnClick = (route: string) => () => history.push(route);

  return (
    <Drawer anchor="left" open={props.drawerOpen} className={classes.drawer}>
      <List className={classes.list}>
          <ListItem button key="Home" className={classes.listItem} onClick={handleOnClick(SamRoute.home)}>
            <ListItemIcon><HomeIcon className={classes.listItem} /></ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem button key="Gallery" className={classes.listItem} onClick={handleOnClick(SamRoute.gallery)}>
            <ListItemIcon><PhotoLibraryIcon className={classes.listItem} /></ListItemIcon>
            <ListItemText primary={"Gallery"} />
          </ListItem>
      </List>
    </Drawer>
  )
}
