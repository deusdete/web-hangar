import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import SendIcon from '@material-ui/icons/Send'


import CardProject from '../CardProject'

import imageVideoDefalt from '../../assets/images/default-video-image.png'

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

export default function AddVideo() {
  const classes = useStyles();
  const [imagePreview, setImagePreview] = useState("")
  const [title, setTitle] = useState("");
  const [text, setText] = useState("")

  function previewFile(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function () {
        // convert image file to base64 string
        setImagePreview(reader.result);
      }, false);

      if (file) {
        reader.readAsDataURL(file);
        console.log(reader)
      }
    }

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
                onChange={e => setTitle(e.target.value)}
                required
                id="titulo"
                name="titulo"
                label="Titulo"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                onChange={e => setText(e.target.value)}
                multiline
                rows={3}
                required
                id="address1"
                name="address1"
                label="Digite uma descrição..."
                fullWidth
                autoComplete="shipping address-line1"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}
              >
                Publicar
            </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={4} justify="center" >
          <Typography variant="subtitle1" align="center">
            Preview
        </Typography>
          <CardProject
            user="João SIlva"
            date="16/01/2021 16:46"
            img={imagePreview ? imagePreview : imageVideoDefalt}
            title={title}
            text={text}
            isExpanded={true} />
        </Grid>
      </Grid>
    </Paper>
  );
}
