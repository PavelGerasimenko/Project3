import React from 'react';

export default class LogItButton extends React.Component {
  render() {
    return(
      <button class="btn btn-primary" type="submit"> onClick={this.props.saveCal}>Submit</button>
    );
  }
}
