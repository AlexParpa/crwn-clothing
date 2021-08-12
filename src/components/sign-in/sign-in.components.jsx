import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component.jsx';
import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        } catch (error) {
            console.error("sign in failed", error.message)
        }
    }

    handleChange = event => {        
        const {value, name} = event.target;
        //sets the value of the the state property with name = [name]
        this.setState({[name]:value});
    }

    render () {
        return (
            <div className='sign-in'>
                <h1 className='title'> I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type="email" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        label="Emal"
                        required
                    />
                    <FormInput
                        name='password' 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn