import React, {Component} from 'react';
import {Paper,Avatar} from 'material-ui';

export default class Card extends Component {
  render() {
    const paperStyle = {
      height: 700,
      width: 1000,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return <Paper zDepth={1} style={paperStyle} />;
  }
}
