import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Nav from './Nav';
import { HOME, LOGIN } from '../constants/app';
import { setView, register, login } from '../actions/app';

class App extends Component{

    static propTypes = {
        view: PropTypes.string.isRequired
    };

    render(){

        const { view } = this.props;

        let View = null;

        switch (view) {
            case HOME:
                View = Home;
                break;
            case LOGIN:
                View = Login;
                break;
            default:
                View = Register;
        }

        return(
            <div className="app">
                <h1>oAuh example</h1>
                <Nav {...this.props} />
                <View {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = ({
                             app: {
                                 view
                             }
                         }) => ({
    view
});

/**
 * @param dispatch
 */
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            onSetView: setView,
            onRegister: register,
            onLogin: login
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(App);