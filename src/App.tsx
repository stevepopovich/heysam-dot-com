import React from 'react';
import { SamHomeAppBar } from './SamHomeAppBar';
import { MainFeatureCard } from './MainFeatureCard';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: 0,
    paddingBottom: '200%',
    backgroundImage: 'url(sam-background-normal.jpg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'round',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SamHomeAppBar />
      <MainFeatureCard />
    </div>
  )
}

export default App;
