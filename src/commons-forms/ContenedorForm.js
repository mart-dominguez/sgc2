import React, { Component}  from 'react';

function  ContenedorForm(props) {
    return (
        <div className="page-content">
        {props.children}
        </div>
    );
}

export default ContenedorForm;