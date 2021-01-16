import { Fragment } from 'react';
import { Grid, Container, Typography } from '@material-ui/core'
import Header from './components/Header';
import { makeStyles } from "@material-ui/core/styles";

import CardProject from './components/CardProject'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  titleContent:{
    padding: 35
  },
  title:{
    fontWeight: "bold",
    fontSize: 18
  }
}));

import Routes from './routes';

function App() {
  const classes = useStyles();

  return (
    <Fragment>
       <Routes/>
    </Fragment>
  );
}

export default App;
