import React, { Component } from 'react';
import TituloFrm from '../commons-forms/TituloFrm';
import ContenedorPage from '../commons-forms/ContenedorPage';
import BarraTabs from '../commons-forms/BarraTabs';
import Tab from '../commons-forms/Tab';
import TabContent from '../commons-forms/TabContent';
import MyForm from '../commons-forms/MyForm';
import MyFormInput from '../commons-forms/MyFormInput';
import MyFilaForm from '../commons-forms/MyFilaForm';

class Producto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           producto : {
            "id": 0,
            "descripcion":"",
            "precio":0.0
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
                    <ContenedorPage>
                        <BarraTabs>
                            <Tab titulo="Tab 1"/>
                            <Tab titulo="Tab 2"/>
                            <Tab titulo="Tab 3"/>
                        </BarraTabs>
                        <TabContent>
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
                        </TabContent>
                    </ContenedorPage>
                </div>
            </div>
        );
    }

}

export default Producto;