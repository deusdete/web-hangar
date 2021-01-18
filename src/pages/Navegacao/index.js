import { Fragment } from 'react';
import { Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";


import Grow from '@material-ui/core/Grow';

import Header from '../../components/Header';
import MapContainer from '../../components/MapConteiner'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  titleContent: {
    padding: 35
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <Header>
      <MapContainer/>
       </Header>
    </Fragment>
  );
}

export default App;
