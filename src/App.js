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
import Section from './components/section';

class App extends Component {

    constructor(props) {
	super(props);
	this.state = { activeClass: "main-contentz" };
    }

    handleScroll = (event) => {
	const randomNumber = Math.floor(Math.random() * 3) + 1;
	const className = "main-content" + randomNumber;
	console.log("className: ", className);
	this.setState({
	    activeClass: className
	});
    }

    componentDidMount() {
	window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
	window.removeEventListener('scoll', this.handleScroll);
    }
    
    render() {
	console.log("activeClass: ", this.state.activeClass);

	const sectionOneProps = {
	    activeClass: this.state.activeClass,
	    text: "Content 1"
	};
	const sectionTwoProps = {
	    activeClass: "main-content2",
	    text: "Content 2"
	};
	const sectionThreeProps = {
	    activeClass: "main-content3",
	    text: "Content 3"
	};
	
	return (
		<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
		<div>
		<div className="App-titlebar">
		<div className="App-header">
		<nav className="main-nav">
  		<ul>
                <li><a href="#">joshuastupplebeen.io</a></li>
	        <li><a href="#">Weblog</a></li>
	        <li><a href="#">Portfolio</a></li>
	        <li><a href="#">Contact</a></li>
		</ul>
		</nav>
		</div>
		<Section { ...sectionOneProps } />
		<Section { ...sectionTwoProps } />
		<Section { ...sectionThreeProps } />
		<footer className="main-footer">Footer</footer>
		</div>
		</div>
		</MuiThemeProvider>
	);
    }
}

export default App;
