import React, { Component } from 'react';
import TituloFrm from '../commons-forms/TituloFrm';
import ContenedorForm from '../commons-forms/ContenedorForm';
import BarraTabs from '../commons-forms/BarraTabs';
import Tab from '../commons-forms/Tab';
import MyForm from '../commons-forms/MyForm';
import MyFormInput from '../commons-forms/MyFormInput';
import MyFilaForm from '../commons-forms/MyFilaForm';

class Abono extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           abono : {
            "id": 0,
            "idCliente":0,
            "idProducto":0,
            "fechaAlta":"",
            "fechaFin":"",
            "observaciones":""
          }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNuevo = this.handleNuevo.bind(this);
    }

    componentWillMount() {        
        fetch('http://localhost:5000/productos/'+this.props.match.params.id)
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            this.setState({ producto: data })
          })
      }

      handleNuevo(event){ 
        event.preventDefault();
        console.log(event);
        let empNuevo= this.state.empleado;
        empNuevo.id=null;
        fetch('http://localhost:5000/clientes', {
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body:JSON.stringify(empNuevo)
        });
       };       
    
    handleInputChange(name,value) {
        this.setState(prevState => ({
            producto: {
                ...prevState.producto,
                [name]: value
            }
        }))
    }
    render() {
        return (
            <div className="content custom-scrollbar">
                <div id="e-commerce-product" className="page-layout simple tabbed">
                    <TituloFrm titulo="Producto" />
                    <ContenedorForm>
                        <BarraTabs>
                            <Tab titulo="Tab 1"/>
                            <Tab titulo="Tab 2"/>
                            <Tab titulo="Tab 3"/>
                        </BarraTabs>
                        <MyForm>
                            <MyFilaForm>                                
                                <MyFormInput    ancho="4" tipo="text" valor={this.state.producto.id} 
                                                etiqueta="ID:" 
                                                nombre="id"
                                                actualizar={this.handleInputChange} />
                                <MyFormInput    ancho="4" tipo="text" valor={this.state.producto.descripcion} 
                                                etiqueta="Descripcion del abono:" 
                                                nombre="descripcion"
                                                actualizar={this.handleInputChange} />
                                <MyFormInput    ancho="4" tipo="text" valor={this.state.producto.precio} 
                                                etiqueta="Precio:" 
                                                nombre="precio"
                                                actualizar={this.handleInputChange} />
                            </MyFilaForm>
                            <button type="submit" className="btn btn-primary" id="btnGuardar" name="btnGuardar" >Guardar</button>
                            <button type="submit" className="btn btn-light" id="btnGuardar" name="btnGuardar" >Guardar</button>
                        </MyForm>
                    </ContenedorForm>
                </div>
            </div>
        );
    }

}

export default Abono;