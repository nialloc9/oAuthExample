import React, { Component } from 'react';
import { LOGIN } from '../constants/app';
import PropTypes from 'prop-types';

class Home extends Component{

    static propTypes = {
        onSetView: PropTypes.func.isRequired,
    };

    handleClick = () => {
        const { onSetView } = this.props;

        onSetView(LOGIN);
    };

    render(){
        return(
            <div>
                <h1>Successfully logged in</h1>
                <button onClick={this.handleClick}>Logout</button>
            </div>
        )
    }
}

export default Home;