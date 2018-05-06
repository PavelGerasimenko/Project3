import React, { Component } from 'react';
import LogForm from './components/LogForm/LogForm';
import Stats from './StatsTableContainer';
//import GoogleLogin from './googleLogin';
import Staticpage from './staticpage';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import StaticFooter from './staticFooter';
import './App.css';

class App extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    //  make axios request to  /api/current_user
    //  set the state of user to whatever the return value is
    //

    axios.get('/api/current_user')
      .then(response => {
        // console.log(response.data.googleId)
        this.setState({ user: response.data.googleId })
        // state.user = response.data.googleId;
        console.log(this.state.user)
        // conditional render -- if response === undefined || null then render google login strategy
        // else if id has a value then redirect to stats table
      })

  }
  render() {
    // console.log(this.state.user)
    return (
      <Router>
        <div>
          <Staticpage />
          <Switch>
            <Route path="/logit" component={LogForm} />
            <Route exact path="/" component={Stats} />
          </Switch>
          <StaticFooter />
        </div>
      </Router>
    );
  }
}

export default App;
