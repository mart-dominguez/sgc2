import React, { Component}  from 'react';
import { Link } from 'react-router-dom';

function BarraLateral(props) {
    return (
        <aside id="aside" className="aside aside-left" data-fuse-bar="aside" data-fuse-bar-media-step="md" data-fuse-bar-position="left">
            <div className="aside-content-wrapper">

            <div className="aside-content bg-primary-700 text-auto">

                <div className="aside-toolbar">
                    <div className="logo">
                        <div className="product-image mr-1">
                            <img src="/images/go.png" height="60" width="120"/>
                        </div>
                    </div>

                    <button id="toggle-fold-aside-button" type="button" className="btn btn-icon d-none d-lg-block" data-fuse-aside-toggle-fold>
                        <i className="icon icon-backburger"></i>
                    </button>

                </div>

                <ul className="nav flex-column custom-scrollbar" id="sidenav" data-children=".nav-item">

                    <li className="subheader">
                        <span>Sistema de gestion comercial  </span>
                    </li>

                    <li className="nav-item" role="tab" id="heading-dashboards">

                        <a className="nav-link ripple with-arrow collapsed" data-toggle="collapse" data-target="#collapse-dashboards" href="#" aria-expanded="false" aria-controls="collapse-dashboards">

                            <i className="icon s-4 icon-tile-four"></i>

                            <span>Gestion</span>
                        </a>
                        <ul id="collapse-dashboards" className="collapse show" role="tabpanel" aria-labelledby="heading-dashboards" data-children=".nav-item">

                            <li className="nav-item">
                                <Link className="nav-link ripple " to='/producto/lista'>Productos</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link ripple " to='/cliente/lista'>Clientes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ripple " to='/'>Abonos</Link>
                            </li>

                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
    );
  }

  export default BarraLateral;