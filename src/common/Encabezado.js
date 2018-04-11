import React, { Component}  from 'react';


function Encabezado(props) {
    return (
        <div className="page-header bg-secondary text-auto p-6 row no-gutters align-items-center justify-content-between">
            <h2 className="doc-title" id="content">{props.titulo}</h2>
        </div>
    );
}

export default Encabezado;
