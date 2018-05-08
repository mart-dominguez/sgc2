import React, { Component } from 'react';
import logo from './logo.svg';
import BarraSuperior from './common/BarraSuperior';
import BarraLateral from './common/BarraLateral';
import './App.css';
import Dashboard from './Dashboard';
import Cliente from './cliente/Cliente';
import Producto from './productos/Producto';
import ProductoLista from './productos/ProductoLista';
import Abono from './abonos/Abono';
import AbonoLista from './abonos/AbonoLista';
import ClienteLista from './cliente/ClienteLista';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       clienteSeleccionado : {
        id: -1,
        nroCliente: 0,
        nombre: " ",
        cuit: "",
        domicilio: "",
        correo: "-",
        ciudad: "",
        idCiudad: 0,
        telefono: ""
       }
    };
    this.seleccionarCliente = this.seleccionarCliente.bind(this);
}

seleccionarCliente(unCli){
  console.log(unCli);
  this.setState({clienteSeleccionado:unCli});
}

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
              <Route  path='/cliente/lista'
                      render={(props) => <ClienteLista {...props} seleccionarCliente={this.seleccionarCliente} />}
              />   
              <Route  path='/cliente/datos'
                      render={(props) => <Cliente {...props} clienteSeleccionado={this.state.clienteSeleccionado} />}
              />   
              <Route  path='/cliente/abonos' component={AbonoLista}/>      
              <Route  path='/abono/:id' component={Abono}/>
            </Switch>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
