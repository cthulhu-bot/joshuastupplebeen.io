import React, {Component} from 'react';
import {Paper, Avatar} from 'material-ui';

export default class Card extends Component {
  render() {
    const paperStyle = {
      height: 600,
      width: 1000,
      margin: 20,
      textAlign: 'right',
      display: 'inline-block',
    };
    const avatarStyle = {
        margin: 50,
    };
    return (
      <Paper zDepth={1} style={paperStyle}>
        <Avatar style={avatarStyle}>
        <h1>{this.props.header}</h1>
        <span><div>{this.props.body}</div></span>
        </Avatar>
      </Paper>
    );
  }
}
