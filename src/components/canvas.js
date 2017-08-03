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

	let p0 = {
	    x: Math.random() * 600,
	    y: Math.random() * 600
	}
	let p1 = {
	    x: Math.random() * 600,
	    y: Math.random() * 600
	}
	let p2 = {
	    x: Math.random() * 600,
	    y: Math.random() * 600
	}

	ctx.beginPath();
	ctx.moveTo(p0.x, p0.y)
	ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y)
	ctx.strokeStyle = 'red'
	ctx.stroke()

	drawPoint(p0)
	drawPoint(p1)
	drawPoint(p2)

	function drawPoint(p) {
	    ctx.fillRect(p.x - 4, p.y - 4, 8, 8)
	}

	// ctx.fillRect(500, 50, 50, 50)
	// ctx.fillStyle = 'red'

	// ctx.beginPath()
	// ctx.arc(20, 120, 10, 0, Math.PI*2)
	// ctx.strokeStyle = 'red'
	// ctx.stroke()
	// ctx.closePath()

	// ctx.beginPath()
	// ctx.arc(120, 20, 10, 0, Math.PI*2)
	// ctx.strokeStyle = 'purple'
	// ctx.stroke()
	// ctx.closePath()
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
