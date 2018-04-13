import React, { Component } from 'react';
import logo from './logo.svg';
import BarraSuperior from './common/BarraSuperior';
import BarraLateral from './common/BarraLateral';
import './App.css';
import Dashboard from './Dashboard';
import Cliente from './cliente/Cliente';
import Producto from './productos/Producto';
import ProductoLista from './productos/ProductoLista';
import ClienteLista from './cliente/ClienteLista';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarraSuperior/> 
        <div id="wrapper">
            <BarraLateral/>
            <div className="content-wrapper">    
            <Switch>
              <Route  exact path='/' component={Dashboard}/>
              <Route  path='/producto/lista' component={ProductoLista}/>
              <Route  path='/producto/:id' component={Producto}/>
              <Route  path='/cliente/lista' component={ClienteLista}/>      
              <Route  path='/cliente/:id' component={Cliente}/>
            </Switch>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
