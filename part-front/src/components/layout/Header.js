import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'

class Header extends Component {
    render() {
        const {title} = this.props
        return (
            <nav className="navbar navbar-expand-sm navbar-dark blu mb-3 py0">
            <div className="container">
                <Link to= '/' className= 'navbar-brand'> {title}</Link>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/registerUser" className="nav-link"> Register </NavLink>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link"> Login </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitches"/>
                <label class="custom-control-label" for="customSwitches"> 
                    <Link to= "/registerAdmin" className="text-muted"> Toggle </Link>
                </label>
            </div>
        </nav>
        )
    }
}

export default Header;