import React, { Component}  from 'react';

function  TabContent(props) {
    return (
        <div className="tab-content">
            <div className="tab-pane fade show active"
                     id="basic-info-tab-pane" role="tabpanel" aria-labelledby="basic-info-tab">
                        {props.children}
            </div>
        </div>
    );
}

export default TabContent;

