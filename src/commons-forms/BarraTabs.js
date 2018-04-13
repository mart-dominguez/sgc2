import React, { Component}  from 'react';

function  BarraTabs(props) {
    return (
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            {props.children}
        </ul>
    );
}

export default BarraTabs;

