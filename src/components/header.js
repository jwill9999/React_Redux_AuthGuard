import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import * as actions from '../actions'

class Header extends Component {

    authButton() {
        // we just pass to our action creators a boolean onClick to indicate if we are loggedIn(example only not for prod)
        // If true render button LogOut else if false render button Login
        if (this.props.authenticated) {
            return <button onClick={() => this.props.authenticate(false)} className="btn btn-warning">LogOut</button>
        }
        return (
            <button onClick={() => this.props.authenticate(true)} className="btn btn-primary">Login</button>
        )
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav" >
                        <li className="nav-item">
                            <Link to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/resources" >Resources</Link>
                        </li>
                        <li className="nav-item">{this.authButton()}</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.authentication }
}

export default connect(mapStateToProps, actions)(Header);


// connect container to store and map props. Connect props and action to component as HOF(higher order function)and export