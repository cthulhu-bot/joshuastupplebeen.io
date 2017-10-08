import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {darkBaseTheme} from 'material-ui/styles/baseThemes/darkBaseTheme';
import Link from './components/link';
import Header from './components/header';
import Footer from './components/footer';
import AppBar from 'material-ui/AppBar';
import Canvas from './components/canvas';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import Section from './components/section';
import image01 from '../public/01.png';
import Paper from 'material-ui/Paper';
import {
  BottomNavigation,
  BottomNavigationButton,
} from 'material-ui/BottomNavigation';
import SvgIcon from 'material-ui/SvgIcon';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleScroll = event => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const className = 'main-content' + randomNumber;
    console.log('className: ', className);
    this.setState({
      activeClass: className,
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scoll', this.handleScroll);
  }

  render() {
    const canvasProps = {
      width: 1024,
      height: 768,
    };
    const sectionOneProps = {
      activeClass: 'main-content1',
      text: 'Content 1',
    };
    const sectionTwoProps = {
      activeClass: 'main-content2',
      text: 'Content 2',
    };
    const sectionThreeProps = {
      activeClass: 'main-content3',
      text: 'Content 3',
    };
    const muiTheme = getMuiTheme({
      palette: {
        textColor: '#37474f',
      },
      appBar: {
        height: 50,
      },
    });
    const paperStyle = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    const iconStyles = {
      marginRight: 24,
    };
    const githubIcon = props => (
      <SvgIcon {...props}>
        <path d="github.svg" />
      </SvgIcon>
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div className="App-titlebar">
            <div className="App-header">
              <nav className="main-nav">
                <ul>
                  <li>
                    <a href="#">joshuastupplebeen.io</a>
                  </li>
                  <li>
                    <a href="#">Weblog</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <main className="main-content">
              <Section {...sectionOneProps} />
              <Section {...sectionTwoProps} />
              <Paper style={paperStyle} zDepth={1} />
              <Section {...sectionThreeProps} />
              <Paper zDepth={1}>
                <Canvas {...canvasProps} />
              </Paper>
            </main>
            <footer className="main-footer">Footer</footer>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
