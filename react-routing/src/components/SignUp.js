import React from "react";

import { Link } from "react-router-dom";

import constants from "./constants";


export default class SignUpView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log(
            "creating user account with credentials: %s, %s, %s, %s",
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.password
        )
        this.setState({firstName: "", lastName: "", email: "", password: ""});
    }


    render() {
        return (
            <div>
                <h1>Sign Up</h1>

                <form onSubmit={evt => this.handleSubmit(evt)}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" type="text" className="form-control" placeholder="enter your first name" 
                        value={this.state.firstName}
                        onInput={evt => this.setState({firstName: evt.target.value})}
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input id="lastName" type="text" className="form-control" placeholder="enter your last name" 
                        value={this.state.lastName}
                        onInput={evt => this.setState({lastName: evt.target.value})}
                        />
                    </div>
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
                        <button type="submit" className="btn btn-success">
                            Sign Up!
                        </button>
                    </div>
                </form>

                <p>Already have an account? <Link to={constants.routes.signin}>Sign in!</Link></p>
            </div>
        );
    }
}