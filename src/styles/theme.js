
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#FB3640',
    },
    primary: {
      main: '#372772',
    },
    azul: {
      main: '#0A2463',
    },
    branco: {
      main: '#ffffff',
    },
    cinza: {
      main: '#F2F2F2 ',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
