import React from 'react';
import TableRow from './TableRow';
import axios from 'axios';

export default class StatsTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: "date",
			exercise: "exercise",
			set: 0,
			reps: 0,
			weight: 0
		}
	}

	componentDidMount() {
		this.getWorkouts()
	}

	getWorkouts = () => {
		console.log('there')
		axios.get('/api/workout')
			.then((response) => {
				this.setState({
					data: response.data
				});
			})
	}


	render() {
		const renderWorkoutsDate = this.state.data ?
			this.state.data.map((workout, index) => (
				<div key={index}> {workout.date} </div>
			)) : "No Workouts";
		const renderWorkoutsExercise = this.state.data ?
			this.state.data.map((workout, index) => (
				<div key={index}> {workout.exercise} </div>
			)) : "No Workouts";
		// const renderWorkoutsSet = this.state.data ?
		//   this.state.data.map((workout, index) => (
		// 	  <div key={index}> {workout.set} </div>
		//   )) : "No Workouts";
		const renderWorkoutsReps = this.state.data ?
			this.state.data.map((workout, index) => (
				<div key={index}> {workout.reps} </div>
			)) : "No Workouts";
		const renderWorkoutsWeight = this.state.data ?
			this.state.data.map((workout, index) => (
				<div key={index}> {workout.weight} </div>
			)) : "No Workouts";
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Date</th>
							<th scope="col">Exercise</th>
							<th scope="col">Set #</th>
							<th scope="col">Reps</th>
							<th scope="col">Lbs</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{renderWorkoutsDate}</td>
							<td>{renderWorkoutsExercise}</td>
							<td>{renderWorkoutsSet}</td>
							<td>{renderWorkoutsReps}</td>
							<td>{renderWorkoutsWeight}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
