import React, { Component } from 'react';
import { connect } from 'react-redux';


export default function (ComposedComponent) {



    class Authentication extends Component {


        //check correct context types for this to work
        static contextTypes = {
            router: React.PropTypes.object
        }


        //if authenticated == false redirect to '/'
        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.push('/')
            }
        }


        //if any props updated check if we are still authenticated
        //if not redirect to '/' again
        componentWillUpdate(nextProps, nextState) {
            if (!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }

        //render the passed component and its props
        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    //connect to store to map props
    function mapStateToProps(state) {
        return { authenticated: state.authentication }
    }

    //higher order function returned
    return connect(mapStateToProps)(Authentication)
}


