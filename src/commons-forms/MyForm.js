import React, { Component}  from 'react';

function  MyForm(props) {
    return (
        <div className="tab-content">
            <div className="tab-pane fade show active"
                     id="basic-info-tab-pane" role="tabpanel" aria-labelledby="basic-info-tab">
                <div className="card p-6">
                    <form  onSubmit={props.procesarEnvio}>
                        {props.children}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MyForm;

