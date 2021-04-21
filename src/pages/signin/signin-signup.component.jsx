import React from 'react';
import SignIn from '../../components/signin/signin.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './signin-signup.styles.scss';

const SignInSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
    
)

export default SignInSignUpPage;