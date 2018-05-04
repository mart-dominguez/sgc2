import React, { Component } from 'react';
import Select from 'react-select';

class MyFormSelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: 0, nombre: ""
      }
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange = (selectedOption) => {
        console.log(selectedOption);
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.id}`);
        console.log(`Selected: ${selectedOption.nombre}`);
      }

    render() {
      const opciones = this.props.opciones;
      const valor = this.props.valor;
      const etiqueta = this.props.etiqueta;
      const nombre= this.props.nombre;
      const tipo = this.props.tipo;
      const ancho = this.props.ancho;
      const selectedOption  = this.state;
      const value = selectedOption && selectedOption.value;
      console.log(selectedOption);
      console.log(this.props.opciones);
      return (          
        <div className={'form-group col-md-'+ancho}>
              <Select
                name="frmCiudad"
                valueKey="id"
                labelKey="nombre" 
                value={value}
                onChange={this.handleChange}
                options={this.props.opciones}
                />
                <label  className="col-form-label">{etiqueta}</label>
        </div>
      );
    }
  }

  export default MyFormSelect;