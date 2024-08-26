import React, { Component } from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input.jsx'
import CustomButton from './../custom-button/custom.button';
import  {SignInWithGoogle}  from '../../firebase/firebase.utils.js'
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../firebase/firebase.utils.js';
class SignIn extends Component {
    state = { 
        email: "",
        password: ""
     } 

     handleSubmit = async (e) => {
        e.preventDefault();
       const {email, password} = this.state;
       try {
        await signInWithEmailAndPassword(auth, email, password); // Correctly call the function
        this.setState({ email: "", password: "" });
    } catch (error) {
        console.error("Error signing in", error.message); // Improved error logging
    }
      }
     
     handleChange = (e) => {
       const {value, name} = e.target; 
       this.setState({[name]: value})

     }
    render() { 
        return (
            <div className="sign-in">
                <h1>Have an account?</h1>
                <span>Sign in with email and password</span>
                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput
                     handleChange={this.handleChange}
                    type="email" 
                    name="email" 
                    value={this.state.email}
                    label="email"
                    required />
                    
                    <FormInput  
                    handleChange={this.handleChange}
                    type="password"
                    name="password" 
                     value={this.state.password} 
                     label='password'
                     required />
                    
                   <div className="buttons">
                         <CustomButton style={{marginRight: "15px"}} type="submit">sign in</CustomButton>
                        {/* sign in with google method */}
                        <CustomButton style={{marginLeft: "15px"}} onClick={SignInWithGoogle} isGoogleSignIn>
                        {' '} sign in with Google{' '}
                        </CustomButton>
                   </div>

               </form>
            </div>
        );
    }
}
 
export default SignIn;