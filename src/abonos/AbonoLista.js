import React, { Component } from 'react';
import Encabezado from '../common/Encabezado';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import MyTableContainer from '../commons-tables/MyTableContainer';

class AbonoLista extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            abonos: []
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
                this.setState({ abonos: data })
            })
    }

    handleNuevo(event) {
        event.preventDefault();
        console.log(event);
        let entNueva = this.state.producto;
        entNueva.id = null;
        fetch('http://localhost:5000/abonos', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(entNueva)
        });
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    }
    render() {
        let indice = 1;
        const lista = this.state.abonos.map((elem) =>
            <tr key={elem.id}>
                <th scope="row"><Link to={"/abono/"+elem.id}>{indice++}</Link></th>
                <td>{elem.idCliente}</td>
                <td>{elem.idProducto}</td>
                <td>{elem.fechaAlta}</td>
                <td>{elem.fechaFin}</td>
            </tr>);
        //style={{  height: '100%' }}
        return (
            <div className="content custom-scrollbar">
                <div className="doc simple-table-doc page-layout simple full-width">
                    <Encabezado titulo="Abonos" />
                    <Scrollbars autoHeight={true} autoHeightMin={500} autoHeightMax={600} >
                    <MyTableContainer entidad="abono"  titulo="Abonos" subtitulo="Detalle de abonos adquiridos por cada cliente">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Cliente</th>
                                    <th>Producto</th>
                                    <th>Fecha Alta</th>
                                    <th>Fecha Baja</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lista}
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