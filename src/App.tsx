import React from 'react';
import { SamHomeAppBar } from './SamHomeAppBar';
import { MainFeatureCard } from './MainFeatureCard';
import { makeStyles } from '@material-ui/core';
import { PhotoGalleryGrid } from './PhotoGalleryGrid';

export const mainDisplayWidth = 800;

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'url(sam-background.jpg)',
    backgroundRepeat: 'repeat-y',
  },
}));

function App() {
  const classes = useStyles();

  const photoGridFileNames = [
    "sam-first-articulation.jpg",
    "sam_with-some-articulation.jpg",
    "sam_in_shambles.jpg",
    "sam_pose.jpeg"
  ];

  return (
    <div className={classes.root}>
      <SamHomeAppBar />
      <MainFeatureCard />
      <PhotoGalleryGrid fileNames={photoGridFileNames} />
    </div>
  )
}

export default App;
