import React, { Component } from 'react';
import classes from './PasswordReset.module.css';
import { NavLink } from 'react-router-dom';


class PasswordReset extends Component{

    state = {
        validationFail: false
    }

    render(){

        let loginForm = (
            <div>
                <h2>RESET PASSWORD</h2>
                <form>
                    <input className={classes.Input} name="email" placeholder="E-mail" type="text"/>

                    <div className={classes.SubmitBtn}>
                        RESET
                    </div>
                </form>
            </div>
        )

        let signUp = (
            <div className={classes.Signup}>
                Don't have an account? <NavLink to="/signup" exact>Sign Up</NavLink> 
        
            </div>
        )

        let errorMessage = (
            <div className={classes.ErrorMessage}>
                Oops That Email Doesn't Exist
            </div>
        );

        if(!this.state.validationFail){
            errorMessage = null;
        }

        return(
            <div className={classes.Login}> 
                
                    <div className={classes.LoginContainer}>
                    {loginForm}
                    {errorMessage}
                    
                    {signUp}
                    </div>

                

            </div>
        )
    }
}

export default PasswordReset; 