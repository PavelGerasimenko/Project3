import React from 'react';
import axios from 'axios';
import moment from 'moment';

export default class LogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: 'Back Extension',
      weight: 25,
      reps: 8,
      set: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    let target = event.target,
      name = target.name,
      value = target.value;

    if (name === 'weight' || name === 'reps' || name === 'set') {
      value = Number(value);
    };

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

    event.preventDefault();

    console.log(this.state);

    let exerciseData = {
      "date": moment().format('MM/DD/YY'),
      "exercise": this.state.exercise,
      "weight": this.state.weight,
      "reps": this.state.reps,
      "set": this.state.set
    }

    console.log(exerciseData);

    axios.post('/api/logworkout', exerciseData)
      .then(function (response) {
        console.log(response);
        console.log(exerciseData);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    return (
      <form className="container" id="main-content" onSubmit={this.handleSubmit}>

        <div className="form-row align-items-center" id="custom-form">

          <div className="w-100 my-1">
            <label className="my-1 mr-2">
              Exercise:
              <select
                className="custom-select"
                name="exercise"
                value={this.state.exercise}
                onChange={this.handleInputChange}>
                <option value="Back Extension">Back Extension</option>
                <option value="Bench Press">Bench Press</option>
                <option value="Bicep Curls">Bicep Curls</option>
                <option value="Calf Raise">Calf Raise</option>
                <option value="Chest Fly">Chest Fly</option>
                <option value="Deadlift">Deadlift</option>
                <option value="Good Morning">Good Morning</option>
                <option value="lat Pull-Down">Lat Pull-Down</option>
                <option value="Leg Curl">Leg Curl</option>
                <option value="Leg Extension">Leg Extension</option>
                <option value="Leg Press">Leg Press</option>
                <option value="Lunge">Lunge</option>
                <option value="Military Press">Military Press</option>
                <option value="Pull-Up">Pull-Up</option>
                <option value="Push-Up">Push-Up</option>
                <option value="Row">Row</option>
                <option value="Shoulder Fly">Shoulder Fly</option>
                <option value="Shoulder Press">Shoulder Press</option>
                <option value="Shoulder Shrug">Shoulder Shrug</option>
                <option value="Sit-Up">Sit-Up</option>
                <option value="Squat">Squat</option>
                <option value="Stomach Crunch">Stomach Crunch</option>
                <option value="Torso Rotation">Torso Rotation</option>
                <option value="Tricep Extension">Tricep Extension</option>
                <option value="Tricep Pushdown">Tricep Pushdown</option>
                <option value="Wrist Curls">Wrist Curls</option>
              </select>
            </label>
          </div>

          <div className="w-100 my-1">
            <label className="my-1 mr-2">
              Weight:
              <select
                className="custom-select"
                name="weight"
                value={this.state.weight}
                onChange={this.handleInputChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
                <option value="60">60</option>
                <option value="65">65</option>
                <option value="70">70</option>
                <option value="75">75</option>
                <option value="80">80</option>
                <option value="85">85</option>
                <option value="90">90</option>
                <option value="95">95</option>
                <option value="100">100</option>
                <option value="105">105</option>
                <option value="110">110</option>
                <option value="115">115</option>
                <option value="120">120</option>
                <option value="125">125</option>
                <option value="130">130</option>
                <option value="135">135</option>
                <option value="140">140</option>
                <option value="145">145</option>
                <option value="150">150</option>
                <option value="155">155</option>
                <option value="160">160</option>
                <option value="165">165</option>
                <option value="170">170</option>
                <option value="175">175</option>
                <option value="180">180</option>
                <option value="185">185</option>
                <option value="190">190</option>
                <option value="195">195</option>
                <option value="200">200</option>
                <option value="205">205</option>
                <option value="210">210</option>
                <option value="215">215</option>
                <option value="220">220</option>
                <option value="225">225</option>
                <option value="230">230</option>
                <option value="235">235</option>
                <option value="240">240</option>
                <option value="245">245</option>
                <option value="250">250</option>
                <option value="255">255</option>
                <option value="260">260</option>
                <option value="265">265</option>
                <option value="270">270</option>
                <option value="275">275</option>
                <option value="280">280</option>
                <option value="285">285</option>
                <option value="290">290</option>
                <option value="255">255</option>
                <option value="260">260</option>
                <option value="265">265</option>
                <option value="270">270</option>
                <option value="275">275</option>
                <option value="280">280</option>
                <option value="285">285</option>
                <option value="290">290</option>
                <option value="295">295</option>
                <option value="300">300</option>
                <option value="305">305</option>
                <option value="310">310</option>
                <option value="315">315</option>
                <option value="320">320</option>
                <option value="325">325</option>
                <option value="330">330</option>
                <option value="335">335</option>
                <option value="340">340</option>
                <option value="345">345</option>
                <option value="350">350</option>
                <option value="355">355</option>
                <option value="360">360</option>
                <option value="365">365</option>
                <option value="370">370</option>
                <option value="375">375</option>
                <option value="380">380</option>
                <option value="385">385</option>
                <option value="390">390</option>
                <option value="395">395</option>
                <option value="400">400</option>
                <option value="405">405</option>
                <option value="410">410</option>
                <option value="415">415</option>
                <option value="420">420</option>
                <option value="425">425</option>
                <option value="430">430</option>
                <option value="435">435</option>
                <option value="440">440</option>
                <option value="445">445</option>
                <option value="450">450</option>
                <option value="455">455</option>
                <option value="460">460</option>
                <option value="465">465</option>
                <option value="470">470</option>
                <option value="475">475</option>
                <option value="480">480</option>
                <option value="485">485</option>
                <option value="490">490</option>
                <option value="495">495</option>
                <option value="500">500</option>
              </select>
            </label>
          </div>

          <div className="w-100 my-1">
            <label className="my-1 mr-2">
              Reps:
              <select
                className="custom-select"
                name="reps"
                value={this.state.reps}
                onChange={this.handleInputChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
              </select>
            </label>
          </div>

          <div className="w-100 my-1">
            <label className="my-1 mr-2">
              Set:
              <select
                className="custom-select"
                name="set"
                value={this.state.set}
                onChange={this.handleInputChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
              </select>
            </label>
          </div>

          <div className="w-100 my-1" id="custom-submit">
            <input className="btn btn-primary btn-lg btn-block" type="submit" value="Submit" />
          </div>

        </div>
      </form>
    );
  }
}
