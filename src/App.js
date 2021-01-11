import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//styles
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//import purple from '@material-ui/core/colors/purple';
//import purple from '@material-ui/core/colors/green';
import './App.css';
//children
import MainRouter from './MainRouter'

const theme = createMuiTheme({
  /*palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },*/
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
