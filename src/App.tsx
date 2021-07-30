import { SamHomeAppBar } from './SamHomeAppBar';
import { makeStyles } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HomePage } from './HomePage/HomePage';
import { Footer } from './Footer';

import "@fontsource/orbitron";
import { PhotoGalleryGrid } from './Gallery/PhotoGalleryGrid';

export const mainDisplayWidth = 800;
export const primaryColor = "#019CFF"; // icon blue
export const accentDarker = "#007DCD";
export const analogousBrighter = "#011DFF";
export const attentionColor = "#FF6401";
export const textColor = "#FFFFFF";
export const bodyTextColor = "#000000";
export const footerColor = "#ECEEF2";

export enum SamRoute {
  home = "/",
  gallery = "/gallery",
}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: footerColor,
    minHeight: '100vh',
    width: '100%',
  },
  container: {
    backgroundColor: 'white',
    paddingBottom: 32
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <SamHomeAppBar />
        <div className={classes.container}>
          <Switch>
              <Route path={SamRoute.gallery}>
                <PhotoGalleryGrid />
              </Route>
              <Route path={SamRoute.home}>
                <HomePage />
              </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
