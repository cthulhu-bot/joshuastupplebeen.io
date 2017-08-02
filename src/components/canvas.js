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
	
	ctx.fillRect(500, 50, 50, 50)
	ctx.fillStyle = 'red'

	ctx.beginPath()
	ctx.arc(20, 120, 10, 0, Math.PI*2)
	ctx.strokeStyle = 'red'
	ctx.stroke()
	ctx.closePath()

	ctx.beginPath()
	ctx.arc(120, 20, 10, 0, Math.PI*2)
	ctx.strokeStyle = 'purple'
	ctx.stroke()
	ctx.closePath()
    }
    
    render() {
	return (
		<canvas id="canvas"
                        width={this.props.width}
                        height={this.props.height}
            ref={canvas => this.canvas = canvas }/>
	);
    }
}

export default Canvas
