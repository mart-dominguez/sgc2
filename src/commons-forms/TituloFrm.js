import React, { Component}  from 'react';


function TituloFrm(props) {
    return (
        <div className="page-header bg-secondary text-auto row no-gutters align-items-center justify-content-between p-6">
        <div className="row no-gutters align-items-center">
            <div className="product-image mr-4">
                <img src="/images/ecommerce/product-image-placeholder.png" />
            </div>
            <div><h2>{props.titulo}</h2></div>
        </div>
    </div>

    );
}

export default TituloFrm;
