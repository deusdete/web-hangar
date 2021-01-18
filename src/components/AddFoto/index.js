import { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { format } from 'date-fns'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';

import SendIcon from '@material-ui/icons/Send'

import api from '../../services/api'
import CardProject from '../CardProject'

import imageDefalt from '../../assets/images/default-img.gif'
import Context from '../../utils/context';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  input: {
    display: 'none',
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    // [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    //   marginTop: theme.spacing(6),
    //   marginBottom: theme.spacing(6),
    //   padding: theme.spacing(3),
    // },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function AddFoto() {
  const context = useContext(Context)
  const classes = useStyles();

  const [user, setUser] = useState(null)
  const [imagePreview, setImagePreview] = useState("")
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [sendig, setSending] = useState(false);

  useEffect(() => {
    async function obterUser(){
     const user =  await  context.getUser();
     setUser(user)
     console.log(user)
    }

    obterUser();
  }, []);

  function getDate(){
    return format(new Date(), 'dd/MM/yyyy hh:mm');
  }

  function previewFile(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function () {
        // convert image file to base64 string
        setImagePreview(reader.result);
        setImage(file)
        console.log('File:', file)
      }, false);

      if (file) {
        reader.readAsDataURL(file);
        console.log(reader)
      }
    }

  }

  async function handleSubmit(e){
    e.preventDefault()
    setSending(true);

    const data = new FormData();

    data.append('title', title);
    data.append('text', text);
    data.append('image', image)

    api.post('/posts', data).then(res => {
      const {post} = res.data;
      console.log(post)
      setSending(false);
      setTitle("");
      setText("");
      setImage(null);
      setImagePreview("")
      setTimeout(() => {
        alert('Postagem publicada');
      },1000)
    }).catch(err => {
      console.log(err)
      setSending(false)
    })
  }

  return (
    <Paper className={classes.paper}>
      <Grid container direction="row" justify="center" spacing={8}>
        <Grid item xs={12} sm={8} md={8} >
          <Grid container spacing={2} direction="row">
            <Grid item xs={12} md={8}>
              <input
                onChange={previewFile}
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Escolher foto
              </Button>
              </label>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                id="titulo"
                name="titulo"
                label="Titulo"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                value={text}
                onChange={e => setText(e.target.value)}
                multiline
                rows={3}
                required
                id="text"
                name="address1"
                label="Digite uma descrição..."
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className={classes.button}
                endIcon={<SendIcon />}
              >
                {sendig ? <CircularProgress color="inherit" /> : 'Publicar'}
            </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={4} justify="center" >
          <Typography variant="subtitle1" align="center">
            Preview
        </Typography>
          <CardProject
            user={user ? user.username : ''}
            date={getDate()}
            img={imagePreview ? imagePreview : imageDefalt}
            title={title}
            text={text}
            isExpanded={true} />
        </Grid>
      </Grid>
    </Paper>
  );
}
