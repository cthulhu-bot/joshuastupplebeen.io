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
        margin: 70,
        height: 100,
        width: 100,
    };
    return (
      <Paper zDepth={1} style={paperStyle}>
        <Avatar style={avatarStyle} src="https://www.fillmurray.com/200/300">
        </Avatar>
      </Paper>
    );
  }
}
