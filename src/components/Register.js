import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Register extends Component{

    static propTypes = {
        onRegister: PropTypes.func.isRequired
    };

    state = {
        error: ""
    };

    handleError = error => {
        this.setState({
            error
        });
    };

    handleClick = e => {
        e.preventDefault();

        const { onRegister } = this.props;

        const { username: { value: username }, password: { value: password } } = this.refs;

        if(username === "") {
            this.handleError("Username required");
            return;
        }

        if(password === ""){
            this.handleError("Password required");
            return;
        };

        this.handleError("");

        onRegister({
            username,
            password
        });
    };

    render(){

        const { error } = this.state;

        return(
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleClick}>
                    <div>
                        <label>Username</label>
                        <input ref="username" type="text" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input ref="password" type="password" />
                    </div>
                    <div>
                        {error}
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;
