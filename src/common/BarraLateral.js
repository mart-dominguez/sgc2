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
                        <span>APPS</span>
                    </li>

                    <li className="nav-item" role="tab" id="heading-dashboards">

                        <a className="nav-link ripple with-arrow collapsed" data-toggle="collapse" data-target="#collapse-dashboards" href="#" aria-expanded="false" aria-controls="collapse-dashboards">

                            <i className="icon s-4 icon-tile-four"></i>

                            <span>Clientes</span>
                        </a>
                        <ul id="collapse-dashboards" className="collapse show" role="tabpanel" aria-labelledby="heading-dashboards" data-children=".nav-item">

                            <li className="nav-item">
                                <Link className="nav-link ripple " to='/cliente'>Datos</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link ripple " to='/lista'>Listados</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ripple " to='/lista'>Pedidos</Link>
                            </li>

                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="apps-calendar.html" data-url="index.html">

                            <i className="icon s-4 icon-calendar-today"></i>

                            <span>Calendar</span>
                        </a>
                    </li>

                    <li className="nav-item" role="tab" id="heading-ecommerce">

                        <a className="nav-link ripple with-arrow collapsed" data-toggle="collapse" data-target="#collapse-ecommerce" href="#" aria-expanded="false" aria-controls="collapse-ecommerce">

                            <i className="icon s-4 icon-cart"></i>

                            <span>Ecommerce</span>
                        </a>
                        <ul id="collapse-ecommerce" className="collapse" role="tabpanel" aria-labelledby="heading-ecommerce" data-children=".nav-item">

                            <li className="nav-item">
                                <a className="nav-link ripple " href="apps-e-commerce-products.html" data-url="index.html">

                                    <span>Products</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="apps-e-commerce-product.html" data-url="index.html">

                                    <span>Product</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="apps-e-commerce-orders.html" data-url="index.html">

                                    <span>Orders</span>
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="apps-mail.html" data-url="index.html">

                            <i className="icon s-4 icon-email"></i>

                            <span>Mail</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="apps-chat.html" data-url="index.html">

                            <i className="icon s-4 icon-hangouts"></i>

                            <span>Chat</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="apps-file-manager.html" data-url="index.html">

                            <i className="icon s-4 icon-folder"></i>

                            <span>File Manager</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="apps-contacts.html" data-url="index.html">

                            <i className="icon s-4 icon-account-box"></i>

                            <span>Contacts</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="apps-todo.html" data-url="index.html">

                            <i className="icon s-4 icon-checkbox-marked"></i>

                            <span>To-Do</span>
                        </a>
                    </li>

                    <li className="subheader">
                        <span>PAGES</span>
                    </li>

                    <li className="nav-item" role="tab" id="heading-authentication">

                        <a className="nav-link ripple with-arrow collapsed" data-toggle="collapse" data-target="#collapse-authentication" href="#" aria-expanded="false" aria-controls="collapse-authentication">

                            <i className="icon s-4 icon-lock"></i>

                            <span>Authentication</span>
                        </a>
                        <ul id="collapse-authentication" className="collapse " role="tabpanel" aria-labelledby="heading-authentication" data-children=".nav-item">

                            <li className="nav-item">
                                <a className="nav-link ripple " href="pages-auth-login.html" data-url="index.html">

                                    <span>Login</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="pages-auth-login-v2.html" data-url="index.html">

                                    <span>Login v2</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="pages-auth-register.html" data-url="index.html">

                                    <span>Register</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="pages-auth-register-v2.html" data-url="index.html">

                                    <span>Register v2</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="pages-auth-forgot-password.html" data-url="index.html">

                                    <span>Forgot Password</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="pages-auth-reset-password.html" data-url="index.html">

                                    <span>Reset Password</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="pages-auth-lock-screen.html" data-url="index.html">

                                    <span>Lock Screen</span>
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="pages-coming-soon.html" data-url="index.html">

                            <i className="icon s-4 icon-alarm-check"></i>

                            <span>Coming Soon</span>
                        </a>
                    </li>

                    <li className="nav-item" role="tab" id="heading-errors">

                        <a className="nav-link ripple with-arrow collapsed" data-toggle="collapse" data-target="#collapse-errors" href="#" aria-expanded="false" aria-controls="collapse-errors">

                            <i className="icon s-4 icon-alert"></i>

                            <span>Errors</span>
                        </a>
                        <ul id="collapse-errors" className="collapse "  role="tabpanel" aria-labelledby="heading-errors" data-children=".nav-item">

                            <li className="nav-item">
                                <a className="nav-link ripple " href="pages-errors-404.html" data-url="index.html">

                                    <span>404</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="pages-errors-500.html" data-url="index.html">

                                    <span>500</span>
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="pages-maintenance.html" data-url="index.html">

                            <i className="icon s-4 icon-oil"></i>

                            <span>Maintenance</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="pages-profile.html" data-url="index.html">

                            <i className="icon s-4 icon-account"></i>

                            <span>Profile</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="pages-search.html" data-url="index.html">

                            <i className="icon s-4 icon-magnify"></i>

                            <span>Search</span>
                        </a>
                    </li>

                    <li className="subheader">
                        <span>USER INTERFACE</span>
                    </li>

                    <li className="nav-item" role="tab" id="heading-elements">

                        <a className="nav-link ripple with-arrow collapsed" data-toggle="collapse" data-target="#collapse-elements" href="#" aria-expanded="false" aria-controls="collapse-elements">

                            <i className="icon s-4 icon-layers"></i>

                            <span>Elements</span>
                        </a>
                        <ul id="collapse-elements" className="collapse " role="tabpanel" aria-labelledby="heading-elements" data-children=".nav-item">

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-alerts.html" data-url="index.html">

                                    <span>Alerts</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-badges.html" data-url="index.html">

                                    <span>Badges</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-breadcrumb.html" data-url="index.html">

                                    <span>Breadcrumb</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-buttons.html" data-url="index.html">

                                    <span>Buttons</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-button-group.html" data-url="index.html">

                                    <span>Button Group</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-cards.html" data-url="index.html">

                                    <span>Cards</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-dropdowns.html" data-url="index.html">

                                    <span>Dropdowns</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-forms.html" data-url="index.html">

                                    <span>Forms</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-input-group.html" data-url="index.html">

                                    <span>Input Group</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-jumbotron.html" data-url="index.html">

                                    <span>Jumbotron</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-list-group.html" data-url="index.html">

                                    <span>List Group</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-navs.html" data-url="index.html">

                                    <span>Navs</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-navbar.html" data-url="index.html">

                                    <span>Navbar</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-pagination.html" data-url="index.html">

                                    <span>Pagination</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-elements-progress.html" data-url="index.html">

                                    <span>Progress</span>
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li className="nav-item" role="tab" id="heading-tables">

                        <a className="nav-link ripple with-arrow collapsed" data-toggle="collapse" data-target="#collapse-tables" href="#" aria-expanded="false" aria-controls="collapse-tables">

                            <i className="icon s-4 icon-table-large"></i>

                            <span>Tables</span>
                        </a>
                        <ul id="collapse-tables" className="collapse " role="tabpanel" aria-labelledby="heading-tables" data-children=".nav-item">

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-tables-simple-table.html" data-url="index.html">

                                    <span>Simple Table</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-tables-data-table.html" data-url="index.html">

                                    <span>Data Table</span>
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li className="nav-item" role="tab" id="heading-page-layouts">

                        <a className="nav-link ripple with-arrow collapsed" data-toggle="collapse" data-target="#collapse-page-layouts" href="#" aria-expanded="false" aria-controls="collapse-page-layouts">

                            <i className="icon s-4 icon-view-quilt"></i>

                            <span>Page Layouts</span>
                        </a>
                        <ul id="collapse-page-layouts" className="collapse " role="tabpanel" aria-labelledby="heading-page-layouts" data-children=".nav-item">

                            <li className="nav-item" role="tab" id="heading-carded">

                                <a className="nav-link ripple with-arrow collapsed" data-toggle="collapse" data-target="#collapse-carded" href="#" aria-expanded="false" aria-controls="collapse-carded">

                                    <span>Carded</span>
                                </a>
                                <ul id="collapse-carded" className="collapse " role="tabpanel" aria-labelledby="heading-carded" data-children=".nav-item">

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-carded-full-width.html" data-url="index.html">

                                            <span>Full Width</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-carded-full-width-2.html" data-url="index.html">

                                            <span>Full Width 2</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-carded-left-sidebar.html" data-url="index.html">

                                            <span>Left Sidebar</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-carded-left-sidebar-2.html" data-url="index.html">

                                            <span>Left Sidebar 2</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-carded-right-sidebar.html" data-url="index.html">

                                            <span>Right Sidebar</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-carded-right-sidebar-2.html" data-url="index.html">

                                            <span>Right Sidebar 2</span>
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item" role="tab" id="heading-simple">

                                <a className="nav-link ripple with-arrow collapsed" data-toggle="collapse" data-target="#collapse-simple" href="#" aria-expanded="false" aria-controls="collapse-simple">

                                    <span>Simple</span>
                                </a>
                                <ul id="collapse-simple" className="collapse " role="tabpanel" aria-labelledby="heading-simple" data-children=".nav-item">

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-simple-full-width.html" data-url="index.html">

                                            <span>Full Width</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-simple-left-sidebar.html" data-url="index.html">

                                            <span>Left Sidebar</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-simple-left-sidebar-2.html" data-url="index.html">

                                            <span>Left Sidebar 2</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-simple-left-sidebar-inner.html" data-url="index.html">

                                            <span>Left Sidebar Inner</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-simple-left-sidebar-floating.html" data-url="index.html">

                                            <span>Left Sidebar Floating</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-simple-right-sidebar.html" data-url="index.html">

                                            <span>Right Sidebar</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-simple-right-sidebar-2.html" data-url="index.html">

                                            <span>Right Sidebar 2</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-simple-right-sidebar-inner.html" data-url="index.html">

                                            <span>Right Sidebar Inner</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-simple-right-sidebar-floating.html" data-url="index.html">

                                            <span>Right Sidebar Floating</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ripple " href="user-interface-page-layouts-simple-tabbed.html" data-url="index.html">

                                            <span>Tabbed</span>
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ripple " href="user-interface-page-layouts-blank.html" data-url="index.html">

                                    <span>Blank</span>
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="user-interface-typography.html" data-url="index.html">

                            <i className="icon s-4 icon-format-text"></i>

                            <span>Typography</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="user-interface-icons.html" data-url="index.html">

                            <i className="icon s-4 icon-information"></i>

                            <span>Icons</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="user-interface-colors.html" data-url="index.html">

                            <i className="icon s-4 icon-palette"></i>

                            <span>Colors</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="user-interface-helper-classes.html" data-url="index.html">

                            <i className="icon s-4 icon-help-circle"></i>

                            <span>Helper Classes</span>
                        </a>
                    </li>

                    <li className="subheader">
                        <span>COMPONENTS</span>
                    </li>

                    <li className="nav-item" role="tab" id="heading-charts">

                        <a className="nav-link ripple with-arrow collapsed" data-toggle="collapse" data-target="#collapse-charts" href="#" aria-expanded="false" aria-controls="collapse-charts">

                            <i className="icon s-4 icon-poll"></i>

                            <span>Charts</span>
                        </a>
                        <ul id="collapse-charts" className="collapse " role="tabpanel" aria-labelledby="heading-charts" data-children=".nav-item">

                            <li className="nav-item">
                                <a className="nav-link ripple " href="components-charts-nvd3.html" data-url="index.html">

                                    <span>nvD3</span>
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="components-collapse.html" data-url="index.html">

                            <i className="icon s-4 icon-plus-box"></i>

                            <span>Collapse</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="components-modal.html" data-url="index.html">

                            <i className="icon s-4 icon-window-maximize"></i>

                            <span>Modal</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="components-popovers.html" data-url="index.html">

                            <i className="icon s-4 icon-tooltip-outline"></i>

                            <span>Popovers</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="components-snackbar.html" data-url="index.html">

                            <i className="icon s-4 icon-page-layout-footer"></i>

                            <span>Snackbar</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link ripple " href="components-tooltips.html" data-url="index.html">

                            <i className="icon s-4 icon-tooltip"></i>

                            <span>Tooltips</span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </aside>
    );
  }

  export default BarraLateral;