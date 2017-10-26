import React, {Component} from 'react';
import {
  BottomNavigation,
  BottomNavigationItem,
} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

export default class Footer extends Component {
  state = {
    selectedIndex: 0,
  };
  select = index => this.setState({selectedIndex: index});
  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
        </BottomNavigation>
      </Paper>
    );
  }
}
