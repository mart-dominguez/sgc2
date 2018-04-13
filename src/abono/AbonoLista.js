import React, { Component } from 'react';
import Encabezado from '../common/Encabezado';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import MyTableContainer from '../commons-tables/MyTableContainer';

class AbonoLista extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productos: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNuevo = this.handleNuevo.bind(this);
    }

    componentWillMount() {
        fetch('http://localhost:5000/productos')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({ productos: data })
            })
    }

    handleNuevo(event) {
        event.preventDefault();
        console.log(event);
        let empNuevo = this.state.producto;
        empNuevo.id = null;
        fetch('http://localhost:5000/productos', {
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
        let indice = 1;

        const listaProductos = this.state.productos.map((prd) =>
            <tr key={prd.id}>
                <th scope="row"><Link to={"/producto/"+prd.id}>{indice++}</Link></th>
                <td>{prd.descripcion}</td>
                <td>{prd.precio}</td>
            </tr>);
        //style={{  height: '100%' }}
        return (
            <div className="content custom-scrollbar">
                <div className="doc simple-table-doc page-layout simple full-width">
                    <Encabezado titulo="Abonos" />
                    <Scrollbars autoHeight={true} autoHeightMin={500} autoHeightMax={600} >
                    <MyTableContainer entidad="producto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaProductos}
                            </tbody>
                        </table>
                    </MyTableContainer>
                    </Scrollbars>
                </div>
            </div>
        )
    }
}

export default AbonoLista;