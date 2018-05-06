import React from 'react';

export default class StatsButton extends React.Component {
  render() {
    return(
      <button onClick={this.props.saveCal}>Stats</button>
    );
  }
}