import React, { Component } from 'react'

class Canvas extends Component {

    constructor(props) {
	super(props)
    }

    handleClick = (event) => {
	console.log('click')
    }
    
    componentDidMount() {
	this.updateCanvas()
	window.addEventListener('click', this.handleClick)
    }

    componentWillReceiveProps() {
    	this.updateCanvas()
    }

    updateCanvas() {
	const ctx = this.canvas.getContext('2d')
	ctx.fillRect(0, 0, 100, 100)
	ctx.fillStyle = 'red'
    }
    
    render() {
	return (
		<canvas id="canvas"
                        width={this.props.width}
                        height={this.props.height}
            ref={canvas => this.canvas = canvas }/>
	)
    }
}

export default Canvas
