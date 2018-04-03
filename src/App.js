import React, { Component } from 'react';
import logo from './logo.svg';
import BarraSuperior from './common/BarraSuperior';
import BarraLateral from './common/BarraLateral';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <BarraSuperior/> 
       <div id="wrapper">
       <BarraLateral/>
       </div>
      </div>
    );
  }
}

export default App;
