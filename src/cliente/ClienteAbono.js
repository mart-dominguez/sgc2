import React, { Component } from 'react';
import TituloFrm from '../commons-forms/TituloFrm';
import ContenedorForm from '../commons-forms/ContenedorForm';
import BarraTabs from '../commons-forms/BarraTabs';
import Tab from '../commons-forms/Tab';
import MyForm from '../commons-forms/MyForm';
import MyFormInput from '../commons-forms/MyFormInput';
import MyFilaForm from '../commons-forms/MyFilaForm';
import TabContent from '../commons-forms/TabContent';

class Cliente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           empleado : props.clienteSeleccionado
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNuevo = this.handleNuevo.bind(this);
    }

    componentWillMount() {        
        // fetch('http://localhost:5000/clientes/'+this.props.match.params.id)
        //   .then((response) => {
        //     return response.json()
        //   })
        //   .then((empleados) => {
        //     this.setState({ empleado: empleados })
        //   })
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
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState(prevState => ({
            empleado: {
                ...prevState.empleado,
                [name]: value
            }
        }))
    }
    render() {
        return (
            <div className="content custom-scrollbar">
            <div id="e-commerce-product" className="page-layout simple tabbed">
                <TituloFrm titulo="Clientes" />
                <ContenedorPage>
                    <BarraTabs>
                        <Tab titulo="Informacion"/>
                        <Tab titulo="Abonos" activo={true}/>
                        <Tab titulo="Pagos"/>
                    </BarraTabs>
                    <TabContent>
                        <MyForm>
                            <MyFilaForm>                                
                                <MyFormInput    ancho="6" tipo="text" valor={this.state.empleado.nombre} 
                                                etiqueta="Nombre o Razon social:" 
                                                nombre="nombre"
                                                actualizar={this.handleInputChange} />
                                <MyFormInput    ancho="3" tipo="text" valor={this.state.empleado.cuit} 
                                                etiqueta="CUIT:" 
                                                nombre="cuit"
                                                actualizar={this.handleInputChange} />
                                <MyFormInput    ancho="3" tipo="text" valor={this.state.empleado.correo} 
                                                etiqueta="Correo:" 
                                                nombre="correo"
                                                actualizar={this.handleInputChange} />
                            </MyFilaForm>                        
                            <MyFilaForm>                                
                                <MyFormInput    ancho="4" tipo="text" valor={this.state.empleado.ciudad} 
                                                etiqueta="Ciudad:" 
                                                nombre="ciudad"
                                                actualizar={this.handleInputChange} />
                                <MyFormInput    ancho="6" tipo="text" valor={this.state.empleado.domicilio} 
                                                etiqueta="Domicilio:" 
                                                nombre="domicilio"
                                                actualizar={this.handleInputChange} />
                                <MyFormInput    ancho="2" tipo="text" valor={this.state.empleado.telefono} 
                                                etiqueta="Telefono:" 
                                                nombre="telefono"
                                                actualizar={this.handleInputChange} />
                            </MyFilaForm>
                            <button type="submit" className="btn btn-primary" id="btnGuardar" name="btnGuardar" >Guardar</button>
                            <button type="submit" className="btn btn-light" id="btnGuardar" name="btnGuardar" >Cancelar</button>
                        </MyForm>
                        </TabContent>                        
                </ContenedorPage>
            </div>
        </div>    
        );
    }

}

export default Cliente;