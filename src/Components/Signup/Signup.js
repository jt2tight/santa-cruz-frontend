import React, { Component } from 'react';
import classes from './Signup.module.css';
import axios from 'axios';
import Success from './Success/Success';


class Signup extends Component{

    state = {
        validationFail: false,
        creationSuccess: null,
        email: '',
        password: '',
        error: null
    }

    emailHandler = (e) => {
        this.setState({email: e.target.value})
    }

    passwordHandler = (e) => {
        this.setState({password: e.target.value})
    }

    signUpSubmitHandler = () => {
        console.log('click')
        let newUser = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('https://santa-cruz-backend.herokuapp.com/userAuth/post-signup', newUser)
        .then(res => {
            console.log(res)
            if(res.status === 201){
                this.setState({creationSuccess: true}); 
                
            }
            if(res.status === 200){
                this.setState({error: res.data.errors[0].msg})
            }
        }).catch(err => {
            console.log(err)
        })
    }

    render(){ 

        let errorMessage = '';
        
        if(this.state.error){
            errorMessage = this.state.error;
        }

        let signupForm = (
            <div>
                <h2>Signup</h2>
                <form>
                    <input className={classes.Input} 
                        name="email" value={this.state.email} 
                        placeholder="E-mail" 
                        type="text" 
                        onChange={this.emailHandler}/>
                    <input className={classes.Input} 
                        name="password" 
                        value={this.state.password} 
                        placeholder="Password" 
                        type="password" 
                        onChange={this.passwordHandler}/>
                    <p className={classes.Error}>{errorMessage}</p>
                    <div className={classes.SubmitBtn} onClick={this.signUpSubmitHandler}>
                        SIGN UP
                    </div>
                </form>
            </div>
        )


        if(this.state.creationSuccess){
            signupForm = <Success />
        }

        return(
            <div className={classes.Signup}> 
                
                    <div className={classes.SignupContainer}>
                    {signupForm}
                    
                    
                 
                    </div>

                

            </div>
        )
    }
}

export default Signup; 