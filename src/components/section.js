import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Card from './card';

class Section extends Component {
  render() {
    const paperStyle = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    const cardProps = {
      header: this.props.text.header,
      preview: this.props.text.previews,
    };

    return (
      <section className={this.props.activeClass}>
        <Card {...cardProps} />
      </section>
    );
  }
}

export default Section;
