import { Fragment } from 'react';
import { Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

import Grow from '@material-ui/core/Grow';

import Header from '../../components/Header';
import AddVideo from '../../components/AddVideo'

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

function PostarVideo() {
  const classes = useStyles();

  return (
    <Fragment>
      <Header>
        <Grid container direction="column" justify="center" alignContent="center">
          <Container className={classes.root}>
            <Grid container justify="center" alignContent="center" className={classes.titleContent}>
              <Typography variant="overline" component="h5" className={classes.title}>Postar uma novo vídeo</Typography>
            </Grid>
            <Grow
              in={true}
              {...(true ? { timeout: 1000 } : {})}>
              <Grid container spacing={4} justify="center"  >
                <AddVideo />
              </Grid>
            </Grow>
          </Container>
        </Grid>
      </Header>
    </Fragment>
  );
}

export default PostarVideo;
