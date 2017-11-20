import React from "react";

import { Link } from "react-router-dom";

import constants from "./constants";


export default class SignInView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log(
            "authenticating user account with credentials: %s, %s",
            this.state.email,
            this.state.password
        )
        this.setState({firstName: "", lastName: "", email: "", password: ""});
    }

    render() {
        return (
            <div>
                <h1>Sign In</h1>

                <form onSubmit={evt => this.handleSubmit(evt)}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" className="form-control" placeholder="enter your email" 
                        value={this.state.email}
                        onInput={evt => this.setState({email: evt.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Password</label>
                        <input id="lastName" type="password" className="form-control" placeholder="enter a password" 
                        value={this.state.password}
                        onInput={evt => this.setState({password: evt.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Sign In!
                        </button>
                    </div>
                </form>

                <p>Don't yet have an account? <Link to={constants.routes.signup}>Sign up!</Link></p>
                <p><Link to="/channels/jacobChannel">Jacob's Channel</Link></p>
            </div>
        );
    }
}