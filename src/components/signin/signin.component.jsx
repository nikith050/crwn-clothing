import React, { Component } from 'react';
import './sign-in.styles.scss'
import { auth, signinWithGoogle } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends Component {

    constructor() {
        super()

        this.state = {
            email: '', password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state
        await auth.signInWithEmailAndPassword(
            email,
            password
        )
        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {

        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    render() {

        const { email, password } = this.state

        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <p className="sub-title">Sign In from your email Id</p>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email"
                        name="email"
                        handleChange={this.handleChange}
                        type="email"
                        value={email}
                        required
                    />
                    <FormInput
                        label="Password"
                        name="password"
                        handleChange={this.handleChange}
                        type="password"
                        value={password}
                        required
                    />
                    <div className="buttons">
                        <CustomButton
                            type="submit"
                        >
                            Sign In
                    </CustomButton>

                        <CustomButton
                            onClick={signinWithGoogle}
                            isGoogleSignin
                        >
                            Sign In With Google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;