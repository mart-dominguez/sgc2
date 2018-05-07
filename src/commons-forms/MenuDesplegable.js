import React, { Component } from 'react';

class MenuDesplegable extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          expandido:this.props.expandido
       };
      this.desplegar = this.desplegar.bind(this);
    }

    desplegar(){    
        console.log("DESPLEGAR ");
        let valor = !this.state.expandido;
        this.setState({
            expandido:valor
        });
    }
  
    render(){
    return (
        <div className={"dropdown"+(this.state.expandido? " show": "") }>
            <button
            className="btn btn-icon fuse-ripple-ready"
            type="button"
            id="dropdownMenu2"
            onClick={this.desplegar}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={this.state.claseMenu}
            >
                <i className="icon icon-dots-vertical"></i>                   
            </button>
            <div
            className={"dropdown-menu"+(this.state.expandido? " show": "") }
            aria-labelledby="dropdownMenu2"
            >
                {this.props.children}
            </div>
            </div>

    );
}
}

export default MenuDesplegable;