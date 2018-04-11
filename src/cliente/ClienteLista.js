import React, { Component } from 'react';
import Encabezado from '../common/Encabezado';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';

class ClienteLista extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            empleados: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNuevo = this.handleNuevo.bind(this);
    }

    componentWillMount() {
        fetch('http://localhost:5000/clientes')
            .then((response) => {
                return response.json()
            })
            .then((empleados) => {
                this.setState({ empleados: empleados })
            })
    }

    handleNuevo(event) {
        event.preventDefault();
        console.log(event);
        let empNuevo = this.state.empleado;
        empNuevo.id = null;
        fetch('http://localhost:5000/clientes', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(empNuevo)
        });
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    }
    render() {
        let indice = 1
        const listaEmpleados = this.state.empleados.map((emp) =>
            <tr key={emp.id}>
                <th scope="row"><Link to={"/cliente/"+emp.id}>{indice++}</Link></th>
                <td>{emp.nombre}</td>
                <td>{emp.domicilio}</td>
                <td>{emp.telefono}</td>
            </tr>);
        //style={{  height: '100%' }}
        return (
            <div className="content custom-scrollbar">
                <div className="doc simple-table-doc page-layout simple full-width">
                    <Encabezado titulo="Clientes" />
                    <Scrollbars autoHeight={true} autoHeightMin={500} autoHeightMax={600} >

                        <div className="page-content p-6">
                            <div className="content container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="example ">
                                            <div className="description">
                                                <div className="description-text">
                                                    <h2 id="examples">Clientes</h2>
                                                    <p>Lista de clientes.</p>
                                                </div>
                                                <div className="toggle-source-preview" >
                                                    <input type="text"  placeholder="buscar cliente" />
                                                    <button type="submit" className="btn btn-secondary fuse-ripple-ready" id="btnBuscar" name="btnBuscar" >Buscar</button>
                                                    <Link to={"/cliente/0"}className="btn btn-light fuse-ripple-ready" id="btnBuscar" name="btnNuevo" role="button" >Nuevo</Link>
                                                </div>
                                            </div>
                                            <div className="source-preview-wrapper">
                                                <div className="preview">
                                                    <div className="preview-elements">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>First Name</th>
                                                                    <th>Last Name</th>
                                                                    <th>Username</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {listaEmpleados}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Scrollbars>
                </div>
            </div>
        )
    }
}

export default ClienteLista;