import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { darkBaseTheme } from 'material-ui/styles/baseThemes/darkBaseTheme';
import Link from './components/link';
import Header from './components/header';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
	    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App-titlebar">
          <div className="App-header">
            <h2>joshuastupplebeen.io</h2>
          </div>
          <Grid>
            <Row>
              <Col xs={3} md={2}>
                <Link></Link>
              </Col>
              <Col xs={3} md={2}>
                <Link></Link>
              </Col>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
