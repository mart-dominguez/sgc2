import React, {
    Component
} from 'react';

function MyFilaForm(props) {
    return ( 
        <div className = "form-row" >
            {props.children}
        </div>
    );
}

export default MyFilaForm;