import { Link }from 'react-router-dom'
import { Component } from "react";

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2 fw-bold m-auto" to='/'>SHEIN</Link>
                </div>
            </nav>
        );
    }
}