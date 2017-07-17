import React, { Component } from 'react';

class Section extends Component {

    render() {
//	{ activeClass, text } = this.props;
	
	return (
		<section className={this.props.activeClass}>{this.props.text}</section>
	);
    }
}

export default Section;
