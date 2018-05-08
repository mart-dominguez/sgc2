import React, { Component}  from 'react';

function  ContenedorPage(props) {
    return (
        <div className="page-content">
        {props.children}
        </div>
    );
}

export default ContenedorPage;