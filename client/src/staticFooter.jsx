import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from './actions';
import { Link } from 'react-router-dom';
import './App.css';

// change props to state

export default class StaticFooter extends React.Component {
    changePage(event) {
        // alert('Log Out');

    }
    render() {
        return (
          <footer className="fixed-bottom" id="custom-footer">
            <Link to='/logit'><img onClick={this.changePage} id="b1" className="NavButton" src="../assets/images/logit.png" width="100px" height="100px" alt="LogIt" /></Link>
            <Link to='/'><img onClick={this.changePage} id="b2" className="NavButton" src="../assets/images/history.png" width="100px" height="100px" alt="Workout History" /></Link>
            <Link to='/charts'><img onClick={this.changePage} id="b3" className="NavButton" src="../assets/images/charts.png" width="100px" height="100px" alt="Charts & Stats" /></Link>
            <Link to='/logout'><img onClick={this.changePage} id="b4" className="NavButton" src="../assets/images/logout.png" width="100px" height="100px" alt="Log Out" /></Link>
          </footer>
        );
    }
}
