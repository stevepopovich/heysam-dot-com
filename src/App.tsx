import { SamHomeAppBar } from './SamHomeAppBar';
import { MainFeatureCard } from './MainFeatureCard';
import { makeStyles } from '@material-ui/core';
import { PhotoGalleryGrid } from './PhotoGalleryGrid';
import { SamTourVideo } from './SamTourVideo';
import { SamSTLViewer } from './SamSTLViewer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const mainDisplayWidth = 800;
export const primaryColor = "#272c34";
export const accentLighter = "#424242";
export const accentDarker = "#212121";
export const textColor = "#ffffff";

export enum SamRoute {
  home = "/",
  gallery = "/gallery",
  model = "/model"
}

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'url(sam-background.jpg)',
    backgroundRepeat: 'repeat-y',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <SamHomeAppBar />
        <Switch>
          <Route path={SamRoute.gallery}>
            <PhotoGalleryGrid />
            <SamTourVideo />
          </Route>
          <Route path={SamRoute.model}>
            <SamSTLViewer />
          </Route>
          <Route path={SamRoute.home}>
            <MainFeatureCard />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
