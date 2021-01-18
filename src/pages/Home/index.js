import { Fragment, useState, useEffect, useContext } from 'react';
import { Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { format } from 'date-fns'

import Grow from '@material-ui/core/Grow';

import CardProject from '../../components/CardProject';
import Header from '../../components/Header';
import Context from '../../utils/context';
import api from '../../services/api';
import CardPlaceholder from '../../components/ContentLoader/CardPost';

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
  const context = useContext(Context);

  const [posts, setPostes] = useState(null);

  useEffect(() => {
    async function getPosts() {
      api.get('/posts').then(res => {
        const { posts } = res.data;
        setPostes(posts);
      }).catch(err => {
        console.log(err)
      })
    }

    getPosts();
  }, []);

  function formartDate(date){
    return format(new Date(date), 'dd/MM/yyyy')
  }

  return (
    <Fragment>
      <Header>
        <Grid container direction="column" justify="center" alignContent="center">
          <Container className={classes.root}>
            <Grid container justify="center" alignContent="center" className={classes.titleContent}>
              <Typography variant="overline" component="h5" className={classes.title}>Seu feed</Typography>
            </Grid>
            <Grid container spacing={4} justify="center"  >
              {posts ? posts.map((item, id) => (
                <Grow
                  key={id}
                  in={true}
                  {...(true ? { timeout: 500 * id } : {})}>
                  <Grid item xs={12} sm={6} md={4}  >
                    <CardProject
                      user={item.posted_by.username}
                      date={formartDate(item.createAt)}
                      img={item.image_url}
                      title={item.title}
                      text={item.text} />
                  </Grid>
                </Grow>
              )) : (
                <>
                  <CardPlaceholder />
                  <CardPlaceholder />
                  <CardPlaceholder />
                </>
              )}

            </Grid>
          </Container>
        </Grid>
      </Header>
    </Fragment>
  );
}

export default App;
