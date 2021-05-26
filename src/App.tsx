import React from 'react';
import { SamHomeAppBar } from './SamHomeAppBar';
import { MainFeatureCard } from './MainFeatureCard';
import { makeStyles } from '@material-ui/core';
import { PhotoGalleryGrid } from './PhotoGalleryGrid';
import { SamTourVideo } from './SamTourVideo';

export const mainDisplayWidth = 800;

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
      <SamHomeAppBar />
      <MainFeatureCard />
      <PhotoGalleryGrid />
      <SamTourVideo />
    </div>
  )
}

export default App;
