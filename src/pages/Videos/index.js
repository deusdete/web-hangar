import { Fragment, useState, useEffect, useContext } from 'react';
import { Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { format } from 'date-fns'

import Grow from '@material-ui/core/Grow';

import PlayerVideo from '../../components/PlayerVideo';
import Header from '../../components/Header';
import Context from '../../utils/context';
import api from '../../services/api';
import CardPlaceholder from '../../components/ContentLoader/CardPost';


import elen from '../../assets/videos/elen-carine.mp4'
import italo from '../../assets/videos/italo-cunha.mp4'
import alex from '../../assets/videos/alex-peixoto.mp4'
import leonardo from '../../assets/videos/leonardo.mp4'
import rafael from '../../assets/videos/rafael.mp4'

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

function Videos() {
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
    return format(new Date(), 'dd/MM/yyyy')
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
              {true ?  (
                <>
                  <Grow
                    in={true}
                    {...(true ? { timeout: 1000 } : {})}>
                    <Grid item xs={12} sm={6} md={4}  >
                      <PlayerVideo
                        user="Élen Carine"
                        date={formartDate()}
                        video={elen}
                        title="Agente de fomento e inovação no ecossitema de Inovação no RS"
                        />
                    </Grid>
                  </Grow>
                  <Grow
                    in={true}
                    {...(true ? { timeout: 1000 } : {})}>
                    <Grid item xs={12} sm={6} md={4}  >
                      <PlayerVideo
                        user="Italo Cunha "
                        date={formartDate()}
                        video={italo}
                        title="Consultor de de captação para investimentos"
                        />
                    </Grid>
                  </Grow>
                  <Grow
                    in={true}
                    {...(true ? { timeout: 1000 } : {})}>
                    <Grid item xs={12} sm={6} md={4}  >
                      <PlayerVideo
                        user="Alex Peixoto "
                        date={formartDate()}
                        video={alex}
                        title=" Acesso a fundos de investimento"
                        />
                    </Grid>
                  </Grow>
                  <Grow
                    in={true}
                    {...(true ? { timeout: 1000 } : {})}>
                    <Grid item xs={12} sm={6} md={4}  >
                      <PlayerVideo
                        user="Leonardo c"
                        date={formartDate()}
                        video={leonardo}
                        title="Leonardo "
                        />
                    </Grid>
                  </Grow>
                  <Grow
                    in={true}
                    {...(true ? { timeout: 1000 } : {})}>
                    <Grid item xs={12} sm={6} md={4}  >
                      <PlayerVideo
                        user="Rafael Rasuski"
                        date={formartDate()}
                        video={rafael}
                        title=" Empreendedor de periferia Rio de Janeiro"
                        />
                    </Grid>
                  </Grow>

                </>
              ) : (
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

export default Videos;
