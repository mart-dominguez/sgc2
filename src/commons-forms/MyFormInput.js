import React, { Component } from 'react';

class MyFormInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.props.actualizar(this.props.nombre,value);
    }
  
    render() {
      const valor = this.props.valor;
      const etiqueta = this.props.etiqueta;
      const nombre= this.props.nombre;
      const tipo = this.props.tipo;
      const ancho = this.props.ancho;
      return (
          
        <div className={'form-group col-md-'+ancho}>
            <input type={tipo} name={nombre} className="form-control md-has-value" id={nombre} 
               onChange={this.handleChange} value={valor}  />
            <label htmlFor={nombre} className="col-form-label">{etiqueta}</label>
        </div>
      );
    }
  }

  export default MyFormInput;