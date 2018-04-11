import React, { Component } from 'react';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            empleados: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNuevo = this.handleNuevo.bind(this);
    }

    componentWillMount() {
        fetch('http://localhost:5000/clientes')
            .then((response) => {
                return response.json()
            })
            .then((empleados) => {
                this.setState({ empleados: empleados })
            })
    }

    handleNuevo(event) {
        event.preventDefault();
        console.log(event);
        let empNuevo = this.state.empleado;
        empNuevo.id = null;
        fetch('http://localhost:5000/clientes', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(empNuevo)
        });
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    }
    render() {
            return (
<div className="content custom-scrollbar ps ps--theme_default" data-ps-id="60dc830e-e19f-21ef-18bf-504f6320a6be">
<div id="project-dashboard" className="page-layout simple right-sidebar">
    <div className="page-content-wrapper custom-scrollbar ps ps--theme_default ps--active-y" data-ps-id="5e08c3ce-2313-af7b-450d-77a5e71c184b">
        <div className="page-header bg-secondary text-auto d-flex flex-column justify-content-between px-6 pt-4 pb-0">
            <div className="row no-gutters align-items-start justify-content-between flex-nowrap">
                <div>
                    <span className="h2">Welcome back, John!</span>
                </div>
                <button type="button" className="sidebar-toggle-button btn btn-icon d-block d-xl-none fuse-ripple-ready" data-fuse-bar-toggle="dashboard-project-sidebar" aria-label="Toggle sidebar">
                    <i className="icon icon-menu"></i>
                </button>
            </div>
            <div className="row no-gutters align-items-center project-selection">
                <div className="selected-project h6 px-4 py-2">ACME Corp. Backend App</div>
                <div className="project-selector">
                    <button type="button" className="btn btn-icon fuse-ripple-ready">
                        <i className="icon icon-dots-horizontal"></i>
                    </button>
                </div>
            </div>
        </div>
        <div className="page-content">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link btn fuse-ripple-ready active show" id="home-tab" data-toggle="tab" href="#home-tab-pane" role="tab" aria-controls="home-tab-pane" aria-expanded="true" aria-selected="true">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn fuse-ripple-ready" id="budget-summary-tab" data-toggle="tab" href="#budget-summary-tab-pane" role="tab" aria-controls="budget-summary-tab-pane" aria-selected="false">Budget Summary</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn fuse-ripple-ready" id="team-members-tab" data-toggle="tab" href="#team-members-tab-pane" role="tab" aria-controls="team-members-tab-pane" aria-selected="false">Team Members</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane fade p-3 active show" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab">
                    <div className="widget-group row no-gutters">
                        <div className="col-12 col-sm-6 col-xl-3 p-3">
                            <div className="widget widget1 card">
                                <div className="widget-header pl-4 pr-2 row no-gutters align-items-center justify-content-between">
                                    <div className="col">
                                        <select className="h6 custom-select">
                                            <option selected="" value="today">Today</option>
                                            <option value="yesterday">Yesterday</option>
                                            <option value="tomorrow">Tomorrow</option>
                                        </select>
                                    </div>
                                    <button type="button" className="btn btn-icon fuse-ripple-ready">
                                        <i className="icon icon-dots-vertical"></i>
                                    </button>
                                </div>
                                <div className="widget-content pt-2 pb-8 d-flex flex-column align-items-center justify-content-center">
                                    <div className="title text-secondary">25</div>
                                    <div className="sub-title h6 text-muted">DUE TASKS</div>
                                </div>
                                <div className="widget-footer p-4 bg-light row no-gutters align-items-center">
                                    <span className="text-muted">Completed:</span>
                                    <span className="ml-2">7</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 p-3">
                            <div className="widget widget2 card">
                                <div className="widget-header pl-4 pr-2 row no-gutters align-items-center justify-content-between">
                                    <div className="col">
                                        <span className="h6">Overdue</span>
                                    </div>
                                    <button type="button" className="btn btn-icon fuse-ripple-ready">
                                        <i className="icon icon-dots-vertical"></i>
                                    </button>
                                </div>
                                <div className="widget-content pt-2 pb-8 d-flex flex-column align-items-center justify-content-center">
                                    <div className="title text-danger">4</div>
                                    <div className="sub-title h6 text-muted">TASKS</div>
                                </div>
                                <div className="widget-footer p-4 bg-light row no-gutters align-items-center">
                                    <span className="text-muted">Yesterday's:</span>
                                    <span className="ml-2">2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
            );
    }
}

export default Dashboard;
