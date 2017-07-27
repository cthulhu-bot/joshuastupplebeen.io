import React, { Component } from 'react'

class Canvas extends Component {
    componentDidMount() {
	this.updateCanvas();
    }

    componentWillReceiveProps() {
	this.updateCanvas();
    }

    updateCanvas() {
	const ctx = this.canvas.getContext('2d')
	ctx.fillRect(0, 0, 100, 100)
	ctx.fillStyle = 'pink'
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
