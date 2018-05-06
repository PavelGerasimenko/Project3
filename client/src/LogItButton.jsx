import React from 'react';

export default class LogItButton extends React.Component {
  render() {
    return(
      <button onClick={this.props.saveCal}>LogIt</button>
    );
  }
}