import React, { Component}  from 'react';
import { Link } from 'react-router-dom';

function  MyTableContainer(props) {
    const entidad = props.entidad;
    const titulo = props.titulo;
    const subtitulo = props.subtitulo;
    return (
        <div className="page-content p-6">
            <div className="content container">
                <div className="row">
                    <div className="col-12">
                        <div className="example ">
                            <div className="description">
                                <div className="description-text">
                                    <h2 id="examples">{titulo}</h2>
                                    <p>{subtitulo}</p>
                                </div>
                                <div className="toggle-source-preview" >
                                    <input type="text"  placeholder="buscar ....." />
                                    <button type="submit" className="btn btn-secondary fuse-ripple-ready" id="btnBuscar" name="btnBuscar" >Buscar</button>
                                    <Link to={entidad+"0"}className="btn btn-light fuse-ripple-ready" id="btnNuevo" name="btnNuevo" role="button" >Nuevo</Link>
                                </div>
                            </div>
                            <div className="source-preview-wrapper">
                                <div className="preview">
                                    <div className="preview-elements">
                                        {props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default MyTableContainer;
