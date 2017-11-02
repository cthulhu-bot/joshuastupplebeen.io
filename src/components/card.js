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
      <Paper style={paperStyle}>
        <Avatar style={avatarStyle} src="https://lh4.googleusercontent.com/2DX6dGexZFGaT_MxlZrPj0Bte3yXOKgHkYI3BWgmy2b0nOJ2BfxrK6Eh8zdDFrcMd0J9hatv-o--a7w=w2880-h1360" />
      </Paper>
    );
  }
}
