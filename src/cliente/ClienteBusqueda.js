import React, { Component } from 'react';

class ClienteBusqueda extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtro:null,
            pagina:0
        };
//        this.handleInputChange = this.handleInputChange.bind(this);
//        this.handleNuevo = this.handleNuevo.bind(this);
        this.elegirCliente = this.elegirCliente.bind(this);
        this.cerrarModal = this.cerrarModal.bind(this);        
    }

    elegirCliente(unCli) {
        console.log(unCli);
        this.props.seleccionarCliente(unCli);
    }
     
    cerrarModal() {
        console.log("Cerrrar ");
        this.props.btnCerrar();
    }

    render() {
        // mostrar 10 clientes y busqueda
        // la busqueda se hace entre toda la lista...
        let inicio = this.state.pagina*5;
        console.log(inicio);
        let resultado= this.props.listaClientes.slice(inicio, 5).map(
            unCliente => 
                <div className="row" key={unCliente.id}>
                    <div className="col-md-4">{unCliente.cuit}</div>
                    <div className="col-md-4">{unCliente.nombre}</div>
                    <div className="col-md-4"><button onClick={()=>this.elegirCliente(unCliente)}>Elegir</button></div>
                </div>            
        );
        console.log(resultado);

        return <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLiveLabel">
                Lista de clientes
              </h5>
              <input/>
              <button>buscar</button>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid bd-example-row">
                <div className="row">
                  <div className="col-md-4">CUIT</div>
                  <div className="col-md-4">Nombre</div>
                </div>
                {resultado}
              </div>
            </div>
            <div className="modal-footer">
            <span>mostrando{this.state.pagina+1*5} de{this.props.listaClientes.length}</span>
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.cerrarModal}>
                Cerrar
              </button>
            </div>
          </div>;
    }
}
export default ClienteBusqueda;