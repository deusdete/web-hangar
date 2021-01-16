import { Fragment } from 'react';
import { Grid, Container } from '@material-ui/core'
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Grid container direction="column" justify="center" alignContent="center">
        <Header/>
        <Container>

        </Container>
      </Grid>
    </Fragment>
  );
}

export default App;
