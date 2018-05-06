import React from 'react';

export default class Detail extends React.Component {
  render() {
    return (
      <div>
        {this.props.events.map(event => <div key={event.name}>{event.name}</div>)}
      </div>
    )
  }
}