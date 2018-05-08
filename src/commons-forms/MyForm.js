import React, { Component}  from 'react';

function  MyForm(props) {
    return (
                <div className="card p-6">
                    <form  onSubmit={props.procesarEnvio}>
                        {props.children}
                    </form>
                </div>
    );
}

export default MyForm;

