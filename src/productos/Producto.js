import React, { Component } from 'react';

class Cliente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           empleado : {
            "id": 0,
            "nroCliente": 0,
            "nombre": "",
            "cuit": "",
            "domicilio": "",
            "correo": "",
            "ciudad": "",
            "idCiudad": 0,
            "telefono": ""
          }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNuevo = this.handleNuevo.bind(this);
    }

    componentWillMount() {        
        fetch('http://localhost:5000/clientes/'+this.props.match.params.id)
          .then((response) => {
            return response.json()
          })
          .then((empleados) => {
            this.setState({ empleado: empleados })
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
                    <div className="page-header bg-secondary text-auto row no-gutters align-items-center justify-content-between p-6">
                        <div className="row no-gutters align-items-center">
                            <div className="product-image mr-4">
                                <img src="/images/ecommerce/product-image-placeholder.png" />
                            </div>
                            <div>Cliente</div>
                        </div>
                    </div>

                    <div className="page-content">

                        <ul className="nav nav-tabs" id="myTab" role="tablist">

                            <li className="nav-item">
                                <a className="nav-link btn active" id="basic-info-tab" data-toggle="tab" href="#basic-info-tab-pane" role="tab" aria-controls="basic-info-tab-pane" aria-expanded="true">Informacion</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link btn" id="product-images-tab" data-toggle="tab" href="#product-images-tab-pane" role="tab" aria-controls="product-images-tab-pane">Pedidos</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link btn" id="pricing-tab" data-toggle="tab" href="#pricing-tab-pane" role="tab" aria-controls="pricing-tab-pane">Observciones</a>
                            </li>
                        </ul>

                        <div className="tab-content">

                            <div className="tab-pane fade show active" id="basic-info-tab-pane" role="tabpanel" aria-labelledby="basic-info-tab">
                                <div className="card p-6">
                                    <form  onSubmit={this.handleNuevo}>
                                        <div className="form-row">
                                            <div className="form-group col-md-4">
                                                <input type="text" name="nombre" className="form-control md-has-value" id="nombre" 
                                                onChange={this.handleInputChange} value={this.state.empleado.nombre}  />
                                                <label htmlFor="nombre" className="col-form-label">Nombre o Razon Social</label>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <input type="text" name="telefono" className="form-control md-has-value" id="telefono" 
                                                onChange={this.handleInputChange} value={this.state.empleado.telefono}  />
                                                <label htmlFor="telefono" className="col-form-label">Telefono</label>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <input type="email" name="correo" className="form-control md-has-value" id="correo"
                                                 onChange={this.handleInputChange} value={this.state.empleado.correo} />
                                                <label htmlFor="correo" className="col-form-label">Correo Electronico</label>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-9">
                                                <input type="text" name="domicilio" className="form-control md-has-value" id="domicilio"
                                                 onChange={this.handleInputChange} value={this.state.empleado.domicilio}  />
                                                <label htmlFor="domicilio" className="col-form-label">Domicilio</label>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <input type="text" name="ciudad" className="form-control md-has-value" id="ciudad"
                                                 onChange={this.handleInputChange} value={this.state.empleado.ciudad} />
                                                <label htmlFor="ciudad" className="col-form-label">Ciudad</label>
                                            </div>
                                        </div>    
                                        <button type="submit" className="btn btn-primary" id="btnGuardar" name="btnGuardar" >Guardar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Cliente;