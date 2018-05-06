import React from 'react';
import TableRow from './TableRow';
import axios from 'axios';
import './App.css';

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
				<tr className="custom-row">
					<td key={index}> {workout.date} </td>
					<td key={index}> {workout.exercise} </td>
					<td key={index}> {workout.set} </td>
					<td key={index}> {workout.reps} </td>
					<td key={index}> {workout.weight} </td>
				</tr>
			)) : "No Workouts";
		// const renderWorkoutsExercise = this.state.data ?
		// 	this.state.data.map((workout, index) => (
		// 		<td key={index}> {workout.exercise} </td>
		// 	)) : "No Workouts";
		// const renderWorkoutsSet = this.state.data ?
		// 	this.state.data.map((workout, index) => (
		// 		<td key={index}> {workout.set} </td>
		// 	)) : "No Workouts";
		// const renderWorkoutsReps = this.state.data ?
		// 	this.state.data.map((workout, index) => (
		// 		<td key={index}> {workout.reps} </td>
		// 	)) : "No Workouts";
		// const renderWorkoutsWeight = this.state.data ?
		// 	this.state.data.map((workout, index) => (
		// 		<td key={index}> {workout.weight} </td>
		// 	)) : "No Workouts";
		return (
			<div className="container" id="main-content">
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">Date</th>
							<th scope="col">Exercise</th>
							<th scope="col">Sets</th>
							<th scope="col">Reps</th>
							<th scope="col">Lbs</th>
						</tr>
					</thead>
					<tbody>
						{renderWorkoutsDate}
						{/* <tr className="custom-row d-block">
							{renderWorkoutsDate}
							{renderWorkoutsExercise}
							{renderWorkoutsSet}
							{renderWorkoutsReps}
							{renderWorkoutsWeight}
						</tr> */}
					</tbody>
				</table>
			</div>
		);
	}
}
