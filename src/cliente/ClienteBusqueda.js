import React, { Component } from 'react';

class ClienteBusqueda extends React.Component {
    constructor(props) {
        super(props);
//        this.state = {        };
//        this.handleInputChange = this.handleInputChange.bind(this);
//        this.handleNuevo = this.handleNuevo.bind(this);
        this.elegirCliente = this.elegirCliente.bind(this);
    }

    elegirCliente(unCli) {
        console.log(unCli);
        this.props.seleccionarCliente(unCli);
    }
     

    render() {
        // mostrar 10 clientes y busqueda
        // la busqueda se hace entre toda la lista...
        let resultado= this.props.listaClientes.slice(0, 5).map(
            unCliente => {
                <div className="row">
                    <div className="col-md-4">{unCliente.cuit}</div>
                    <div className="col-md-4">{unCliente.nombre}</div>
                    <div className="col-md-4">
                    <button type="button" onClick={()=>this.elegirCliente(unCliente)}>Elegir</button>
                    </div>
                </div>

                return 
            }
        );
        return (
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container-fluid bd-example-row">
                                <div className="row">
                                    <div className="col-md-4">.col-md-4</div>
                                    <div className="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
                                    <div className="col-md-2 col-md-offset-4">.col-md-2 .col-md-offset-4</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3">.col-md-6 .col-md-offset-3</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-9">
                                        Level 1: .col-sm-9
                                        <div className="row">
                                            <div className="col-8 col-sm-6">
                                                Level 2: .col-8 .col-sm-6
                                            </div>
                                            <div className="col-4 col-sm-6">
                                                Level 2: .col-4 .col-sm-6
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
        );
    }
}
export default ClienteBusqueda;