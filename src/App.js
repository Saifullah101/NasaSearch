import React, { Component } from "react";
import logo from './logo.svg';
import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Particles from 'react-particles-js';
import ReactDOM from "react-dom";
import ParticlesContainer from "./components/ParticlesContainer";
import SearchInput from "./components/imagesearch.js";


//https://www.npmjs.com/package/react-particles-js
//Code used from this and added to main


class App extends Component {
  state = {
   date: "",
   photo: ""
 };

 changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });//using this allows you to see the updated state
this.getPhoto(dateFromInput);
    console.log(e.target);
  };

  changeDate1 = e => {
     e.preventDefault();
     let dateFromInput = e.target[0].value;
     this.setState({ date: dateFromInput });//using this allows you to see the updated state
 this.getPhoto(dateFromInput);
     console.log(e.target);
   };


  getPhoto = date => {
      fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo`)
        .then(response => response.json())
        .then(photoData => this.setState({ photo: photoData }));
    };

  render() {
    return (

      <router>
      <div

      >
         <ParticlesContainer />
             <img src="https://i.imgur.com/4GPPExl.png"style={{ position: 'absolute',   top: 230, left: 600,}}/>

        <h1 align="center">Welcome to NASA</h1>
        <h1 id = "search">NASA Image Search</h1>
        <h4 align="center">NASA's Astronomy Picture of the Day!</h4>
        <DateInput changeDate={this.changeDate} />
        <SearchInput changeDate1={this.changeDate1} />
        <Photo photo={this.state.photo} />
        </div>

        </router>

    );
  }
}
export default App;
