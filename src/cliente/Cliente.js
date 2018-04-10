import React, { Component}  from 'react';

class Cliente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: 0,
          nroCliente:0,
          nombre: "",
          cuit:"",
          domicilio:"",
          correo:"",
          idCiudad:0,
          telefono:""
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    render() {
            return (
                <div className="content custom-scrollbar">
                    <div id="e-commerce-product" className="page-layout simple tabbed">
                        <div className="page-header bg-secondary text-auto row no-gutters align-items-center justify-content-between p-6">
                            <div className="row no-gutters align-items-center">
                                <div className="product-image mr-4">
                                    <img src="/images/ecommerce/product-image-placeholder.png"/>
                                </div>
                                <div>Cliente</div>
                            </div>
                        </div>
                        <div className="page-content">
                            <div className="card p-6">                           
 <form>
    <div class="form-row">
        <div class="form-group col-md-6">
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
            <label for="inputEmail4" class="col-form-label">Email</label>
        </div>
        <div class="form-group col-md-6">
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
            <label for="inputPassword4" class="col-form-label">Password</label>
        </div>
    </div>
    <div class="form-group">
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
        <label for="inputAddress" class="col-form-label">Address</label>
    </div>
    <div class="form-group">
        <input type="text" class="form-control" id="inputAddress2"
               placeholder="Apartment, studio, or floor"/>
        <label for="inputAddress2" class="col-form-label">Address 2</label>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <input type="text" class="form-control" id="inputCity"/>
            <label for="inputCity" class="col-form-label">City</label>
        </div>
        <div class="form-group col-md-4">
            <label for="inputState" class="col-form-label">State</label>
            <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div class="form-group col-md-2">
            <input type="text" class="form-control" id="inputZip"/>
            <label for="inputZip" class="col-form-label">Zip</label>
        </div>
    </div>
    <div class="form-group">
        <div class="form-check">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox"/>
                <span class="checkbox-icon"></span>
                <span class="form-check-description">Check me out</span>
            </label>
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
</form>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

}

export default Cliente;