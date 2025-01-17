import React, { Component } from 'react';
import { auth, createUserProfileDocument } from './../../firebase/firebase.utils';
import './sign-up.scss';
import FormInput from './../form-input/form-input';
import CustomButton from './../custom-button/custom.button';
import { createUserWithEmailAndPassword } from 'firebase/auth';

class SignUp extends Component {
    state = { 
        displayName: "",
        email:"",
        password: "",
        confirmPassword: "",
     } 

    handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
      
        if(password !== confirmPassword){
            alert("💥passwords don't match💥");
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password); // Use the function directly
            await createUserProfileDocument(user, { displayName }); // Assuming createUserProfileDocument is defined correctly
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        } catch (error) {
            console.error("Error creating user", error.message); // Improved error logging
        }
    }

     handleChange = (e) => {
       const {name, value} = e.target;

       this.setState({[name]: value})

     }
     
    render() { 
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            
            <div className="sign-up">
                <h2 className="title">Dont have an account?</h2>
                <span>Sign up with email and password</span>

                <form action="" className="sign-up" onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text"
                    name= 'displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required/>

                    <FormInput
                    type="email"
                    name= 'email'
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required/>

                    <FormInput
                    type="password"
                    name= 'password'
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required/>

                    <FormInput
                    type="password"
                    name= 'confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required/>
                <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}
 
export default  SignUp;
