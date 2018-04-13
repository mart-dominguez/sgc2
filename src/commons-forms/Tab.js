import React, { Component}  from 'react';

function  Tab(props) {
    return (
        <li className="nav-item">
            <a className="nav-link btn" id="product-images-tab" data-toggle="tab" 
            href="#" role="tab" aria-controls="product-images-tab-pane">{props.titulo}</a>
        </li>
    );
}

export default Tab;
