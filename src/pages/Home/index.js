import { Fragment } from 'react';
import { Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

import Grow from '@material-ui/core/Grow';

import CardProject from '../../components/CardProject';
import Header from '../../components/Header';

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

function App() {
  const classes = useStyles();

  return (
    <Fragment>
       <Header>
        <Grid container direction="column" justify="center" alignContent="center">
          <Container className={classes.root}>
            <Grid container justify="center" alignContent="center" className={classes.titleContent}>
              <Typography variant="overline" component="h5" className={classes.title}>Seu feed</Typography>
            </Grid>
            <Grid container spacing={4} justify="center"  >
              {[1,2,3,4,5,6].map(item => (
                <Grow
                  in={true}
                  {...(true ? { timeout: 500 * item } : {})}>
                  <Grid item xs={12} sm={6} md={4}  >
                    <CardProject
                      user="João SIlva"
                      date="16/01/2021 16:46"
                      img="https://source.unsplash.com/random"
                      title="Acompanhe a evolução da minha startup. Disponivel para novos negócios!"
                      text="Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos" />
                  </Grid>
                </Grow>
              ))}
            </Grid>
          </Container>
        </Grid>
       </Header>
    </Fragment>
  );
}

export default App;
