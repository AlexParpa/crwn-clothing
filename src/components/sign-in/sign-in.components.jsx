import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component.jsx';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''});
    }

    handleChange = event => {        
        const {value, name} = event.target;
        //sets the value of the the state property with name = [name]
        this.setState({[name]:value});
    }

    render () {
        return (
            <div className='sign-in'>
                <h1> I already have an account</h1>
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

                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn