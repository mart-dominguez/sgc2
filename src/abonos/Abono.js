import React, { Component } from 'react';
import TituloFrm from '../commons-forms/TituloFrm';
import ContenedorForm from '../commons-forms/ContenedorForm';
import BarraTabs from '../commons-forms/BarraTabs';
import Tab from '../commons-forms/Tab';
import MyForm from '../commons-forms/MyForm';
import MyFormInput from '../commons-forms/MyFormInput';
import MyFilaForm from '../commons-forms/MyFilaForm';
import Modal from 'react-modal';
import ClienteBusqueda from '../cliente/ClienteBusqueda';
const customStyles = {
    content : {
        position: "absolute",
        top: "140px",
        left: "20%",
        right: "10%",
        bottom: "auto",
        backgroundColor: "papayawhip"
      },
    overlay : {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rebeccapurple"
      }
  };

class Abono extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
           abono : {
            "id": 0,
            "idCliente":0,
            "idProducto":0,
            "fechaAlta":"",
            "fechaFin":"",
            "observaciones":""
          },
          clientes:[]
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNuevo = this.handleNuevo.bind(this);
        this.seleccionarCliente = this.seleccionarCliente.bind(this);        
    }

    openModal() {
        this.setState({modalIsOpen: true});
      }
     
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    componentWillMount() {        
        fetch('http://localhost:5000/abonos/'+this.props.match.params.id)
          .then((response) => {
            if(response.ok) {
                response.json().then(data => this.setState({ abonos: data }));
            } else {
                console.log('No data');
            }
          })
          .then(() =>{
            return fetch('http://localhost:5000/clientes');
          })
          .then((response) => {
            console.log(response);
            console.log(response.ok);
            if(response.ok) {
                response.json().then((data) => {
                    console.log(data);
                    this.setState({ clientes: data })
                }
                );
            } else {
                console.log('No data listaCli');
              }
          })
          .catch(
              (error) => console.log('Error fetch: ' + error.message)
            );
      }

      handleNuevo(event){ 
        event.preventDefault();
        console.log(event);
        let empNuevo= this.state.abono;
        empNuevo.id=null;
        fetch('http://localhost:5000/abonos', {
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

    seleccionarCliente(cliSelected){
        console.log(cliSelected);
    }

    render() {
        return (
            <div className="content custom-scrollbar">
                <div id="e-commerce-product" className="page-layout simple tabbed">
                    <TituloFrm titulo="Abonos vendidos" />
                    <ContenedorForm>
                        <BarraTabs>
                            <Tab titulo="Tab 1"/>
                            <Tab titulo="Tab 2"/>
                            <Tab titulo="Tab 3"/>
                        </BarraTabs>
                        <MyForm>
                            <MyFilaForm>                                
                                <MyFormInput    ancho="4" tipo="text" valor={this.state.abono.id} 
                                                etiqueta="ID:" 
                                                nombre="id"
                                                actualizar={this.handleInputChange} />
                                <MyFormInput    ancho="4" tipo="text" valor={this.state.abono.idCliente} 
                                                etiqueta="Cliente:" 
                                                nombre="idCliente"
                                                actualizar={this.handleInputChange} />
                                <MyFormInput    ancho="4" tipo="text" valor={this.state.abono.idProducto} 
                                                etiqueta="Producto:" 
                                                nombre="idProducto"
                                                actualizar={this.handleInputChange} />
                            </MyFilaForm>
                            <button type="submit" className="btn btn-primary" id="btnGuardar" name="btnGuardar" >Guardar</button>
                            <button type="submit" className="btn btn-light" id="btnGuardar" name="btnGuardar" >Guardar</button>
                            <button type="button" onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        > 
        <ClienteBusqueda seleccionarCliente={this.seleccionarCliente} listaClientes={this.state.clientes} btnCerrar={this.closeModal}/>
      </Modal>
                        </MyForm>
                    </ContenedorForm>
                </div>
            </div>
        );
    }

}

export default Abono;