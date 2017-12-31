import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { REGISTER, LOGIN } from '../constants/app';

class Nav extends Component{

    static propTypes = {
        onSetView: PropTypes.func.isRequired,
    };

    handleClick = view => () => {
        const { onSetView } = this.props;
        onSetView(view);
    };

    render(){

        return(
            <div>
                <a href="#" onClick={this.handleClick(LOGIN)}>
                    Login
                </a>
                <a href="#" onClick={this.handleClick(REGISTER)}>
                    Register
                </a>
            </div>
        )
    }
}

export default Nav;
