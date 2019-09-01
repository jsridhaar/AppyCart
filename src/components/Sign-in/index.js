import React, { Component } from "react";
import FormInput from "../form-input"
import FormButton from "../form-button"

import { signInWithGoogle } from "../../firebase"
import "./index.scss"

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      email: "",
      password: ""
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I Already have an Account</h2>
        <span>Sign in with your Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <FormButton type="submit" value="Submit form">SignIn</FormButton>
            <FormButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign In with Google</FormButton>
          </div>
        </form>
      </div>
    );
  }
}
