import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

class Section extends Component {
  render() {
    const paperStyle = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };

    return (
       <section className={this.props.activeClass}>{this.props.text}</section>
    );
  }
}

export default Section;
