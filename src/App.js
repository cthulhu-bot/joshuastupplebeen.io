import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import createPalette from 'material-ui/styles/createPalette';
import Link from './components/link';
import Header from './components/header';
import Footer from './components/footer';
import AppBar from 'material-ui/AppBar';
import Canvas from './components/canvas';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import Section from './components/section';
import image01 from '../public/01.png';
import Paper from 'material-ui/Paper';
import Button from './components/button';
import {
  BottomNavigation,
  BottomNavigationButton,
} from 'material-ui/BottomNavigation';
import SvgIcon from 'material-ui/SvgIcon';
import {sectionOneText} from './text';
import { grey100, amber100, red100 } from 'material-ui/colors';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleScroll = event => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const className = 'main-content' + randomNumber;
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
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const canvasProps = {
      width: width,
      height: height,
    };
    const sectionOneProps = {
      activeClass: 'main-content1',
      text: sectionOneText,
      numCards: 2,
    };
    const sectionTwoProps = {
      activeClass: 'main-content2',
      text: 'Content 2',
    };
    const sectionThreeProps = {
      activeClass: 'main-content3',
      text: 'Content 3',
    };
    const muiTheme = createMuiTheme({
      palette: createPalette({
          primary: grey100,
          accent: amber100,
          error: red100,
      })
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
    const footerProps = {
      activeClass: 'main-footer',
    };
    const githubIcon = props => (
      <SvgIcon {...props}>
        <path d="github.svg" />
      </SvgIcon>
    );
    const buttonProps = {};

    return (
      <MuiThemeProvider theme={muiTheme}>
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
              <Canvas {...canvasProps} />
              <Button {...buttonProps} />
            </main>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
