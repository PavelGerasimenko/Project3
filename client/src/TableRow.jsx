import React, { Component } from 'react';
// import moment from 'moment';
// import _ from 'underscore';

export class TableRow extends React.Component {
	render() {
		console.log(this.props);
		return <div>{this.props.value}</div>;
	}
}

export default TableRow;