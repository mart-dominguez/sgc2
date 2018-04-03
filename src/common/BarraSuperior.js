import React, { Component}  from 'react';


function BarraSuperior(props) {
    return (
    <nav id="toolbar" className="bg-white">
    <div className="row no-gutters align-items-center flex-nowrap">
        <div className="col">
            <div className="row no-gutters align-items-center flex-nowrap">
                <button type="button" className="toggle-aside-button btn btn-icon d-block d-lg-none fuse-ripple-ready" data-fuse-bar-toggle="aside">
                    <i className="icon icon-menu"></i>
                </button>
                <div className="toolbar-separator d-block d-lg-none"></div>
                <div className="shortcuts-wrapper row no-gutters align-items-center px-0 px-sm-2">
                    <div className="shortcuts row no-gutters align-items-center d-none d-md-flex">
                        <a href="apps-chat.html" className="shortcut-button btn btn-icon mx-1 fuse-ripple-ready">
                            <i className="icon icon-hangouts"></i>
                        </a>
                        <a href="apps-contacts.html" className="shortcut-button btn btn-icon mx-1 fuse-ripple-ready">
                            <i className="icon icon-account-box"></i>
                        </a>
                        <a href="apps-mail.html" className="shortcut-button btn btn-icon mx-1 fuse-ripple-ready">
                            <i className="icon icon-email"></i>
                        </a>
                    </div>
                    <div className="add-shortcut-menu-button dropdown px-1 px-sm-3">
                        <div className="dropdown-toggle btn btn-icon fuse-ripple-ready" role="button" id="dropdownShortcutMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="icon icon-star text-amber-600"></i>
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownShortcutMenu">
                            <a className="dropdown-item fuse-ripple-ready" href="#">
                                <div className="row no-gutters align-items-center justify-content-between flex-nowrap">
                                    <div className="row no-gutters align-items-center flex-nowrap">
                                        <i className="icon icon-calendar-today"></i>
                                        <span className="px-3">Calendar</span>
                                    </div>
                                    <i className="icon icon-pin s-5 ml-2"></i>
                                </div>
                            </a>
                            <a className="dropdown-item fuse-ripple-ready" href="#">
                                <div className="row no-gutters align-items-center justify-content-between flex-nowrap">
                                    <div className="row no-gutters align-items-center flex-nowrap">
                                        <i className="icon icon-folder"></i>
                                        <span className="px-3">File Manager</span>
                                    </div>
                                    <i className="icon icon-pin s-5 ml-2"></i>
                                </div>
                            </a>
                            <a className="dropdown-item fuse-ripple-ready" href="#">
                                <div className="row no-gutters align-items-center justify-content-between flex-nowrap">
                                    <div className="row no-gutters align-items-center flex-nowrap">
                                        <i className="icon icon-checkbox-marked"></i>
                                        <span className="px-3">To-Do</span>
                                    </div>
                                    <i className="icon icon-pin s-5 ml-2"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="toolbar-separator"></div>
            </div>
        </div>
        <div className="col-auto">
            <div className="row no-gutters align-items-center justify-content-end">
                <div className="user-menu-button dropdown">
                    <div className="dropdown-toggle ripple row align-items-center no-gutters px-2 px-sm-4 fuse-ripple-ready" role="button" id="dropdownUserMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="avatar-wrapper">
                            <img className="avatar" src="/images/avatars/profile.jpg"/>
                            <i className="status text-green icon-checkbox-marked-circle s-4"></i>
                        </div>
                        <span className="username mx-3 d-none d-md-block">John Doe</span>
                    </div>

                    <div className="dropdown-menu" aria-labelledby="dropdownUserMenu">

                        <a className="dropdown-item fuse-ripple-ready" href="#">
                            <div className="row no-gutters align-items-center flex-nowrap">
                                <i className="icon-account"></i>
                                <span className="px-3">My Profile</span>
                            </div>
                        </a>

                        <a className="dropdown-item fuse-ripple-ready" href="#">
                            <div className="row no-gutters align-items-center flex-nowrap">
                                <i className="icon-email"></i>
                                <span className="px-3">Inbox</span>
                            </div>
                        </a>

                        <a className="dropdown-item fuse-ripple-ready" href="#">
                            <div className="row no-gutters align-items-center flex-nowrap">
                                <i className="status text-green icon-checkbox-marked-circle"></i>
                                <span className="px-3">Online</span>
                            </div>
                        </a>

                        <div className="dropdown-divider"></div>

                        <a className="dropdown-item fuse-ripple-ready" href="#">
                            <div className="row no-gutters align-items-center flex-nowrap">
                                <i className="icon-logout"></i>
                                <span className="px-3">Logout</span>
                            </div>
                        </a>

                    </div>
                </div>

                <div className="toolbar-separator"></div>

                <button type="button" className="search-button btn btn-icon fuse-ripple-ready">
                    <i className="icon icon-magnify"></i>
                </button>

                <div className="toolbar-separator"></div>

                <div className="language-button dropdown">

                    <div className="dropdown-toggle ripple row align-items-center justify-content-center no-gutters px-0 px-sm-4 fuse-ripple-ready" role="button" id="dropdownLanguageMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="row no-gutters align-items-center">
                            <img className="flag mr-2" src="/images/flags/us.png"/>
                            <span className="d-none d-md-block">EN</span>
                        </div>
                    </div>

                    <div className="dropdown-menu" aria-labelledby="dropdownLanguageMenu">

                        <a className="dropdown-item fuse-ripple-ready" href="#">
                            <div className="row no-gutters align-items-center flex-nowrap">
                                <img className="flag" src="/images/flags/us.png"/>
                                <span className="px-3">English</span>
                            </div>
                        </a>

                        <a className="dropdown-item fuse-ripple-ready" href="#">
                            <div className="row no-gutters align-items-center flex-nowrap">
                                <img className="flag" src="/images/flags/es.png"/>
                                <span className="px-3">Spanish</span>
                            </div>
                        </a>

                        <a className="dropdown-item fuse-ripple-ready" href="#">
                            <div className="row no-gutters align-items-center flex-nowrap">
                                <img className="flag" src="/images/flags/tr.png"/>
                                <span className="px-3">Turkish</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="toolbar-separator"></div>

                <button type="button" className="quick-panel-button btn btn-icon fuse-ripple-ready" data-fuse-bar-toggle="quick-panel-sidebar">
                    <i className="icon icon-format-list-bulleted"></i>
                </button>
            </div>
        </div>
    </div>
    </nav>);
  }

  export default BarraSuperior;
