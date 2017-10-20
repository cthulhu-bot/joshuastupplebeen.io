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

    const previewTextEntries = this.props.text.previews;

    return (
       <section className={this.props.activeClass}>
       <Paper zDepth={1}>
        <h1>{this.props.text.header}</h1>
        <ul>{previewTextEntries}<br /></ul>
        </Paper>
       </section>
    );
  }
}

export default Section;
