import React from 'react';
import './App.css';

export default class Staticpage extends React.Component {
    render() {
        return (
             <div className='container fixed-top' id="custom-header">
                <img id="title" className="img-fluid" src="../assets/images/beast_logo.png" ></img>
             </div>
        );
    }
}
