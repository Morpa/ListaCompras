import React, { Component, Fragment } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Header from './common/Header'
import Home from './home'
import CreateList from './createList';
import store from './store';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#00b0ff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Fragment>
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/lista' component={CreateList} />
              </Switch>
            </Fragment>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
