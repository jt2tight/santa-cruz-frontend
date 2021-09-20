import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Login.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../store/auth-context';


const Login = (props) => {
    window.scrollTo(0, 0)
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    let history = useHistory()

    let errorMessage= props.errorMessage; 

    const LoginHandler = (event) => {
        event.preventDefault();
        
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);

        let url = 'https://santa-cruz-backend.herokuapp.com/userAuth/login';

        const loginCredentials = {
            email: enteredEmail, 
            password: enteredPassword,
            returnSecureToken: true
        
        };

        axios.post(url, loginCredentials)
        .then(res => {
            authCtx.login(res.data.token, res.data.userId, res.data.email)
            props.parentCallback(res.data.userId);

            localStorage.setItem('user', res.data.userId)
            localStorage.setItem('userEmail', res.data.email)
            localStorage.setItem('userToken', res.data.token)

            let prevpage = localStorage.getItem('prevPage');
            if(prevpage === 'checkout'){
                history.replace('/shipping')
            } else {
            history.replace('/')
            }
        
        })
        .catch(err => {
            if(err.response.data.status === 403){
                errorMessage = err.response.data.error;
                console.log(errorMessage)
            }
            props.errorCallback(err);
            console.log(err.response)
        })
        
    }

    

    let loginForm = (
            <div>
                <h2>LOGIN</h2>
                <form>
                    <input 
                        className={classes.Input} 
                        ref={emailInputRef}
                        name="email" 
                        placeholder="E-mail" 
                        type="text"
                        
                        />
                    <input 
                        className={classes.Input} 
                        ref={passwordInputRef} 
                        name="password" 
                        placeholder="Password" 
                        type="password"
                        
                        />
                    <div className={classes.PasswordReset}>
                    
                        <NavLink to="/reset-password" exact>Forgot Password</NavLink>
                    </div>
                    <p className={classes.Error}>{errorMessage}</p>
                    <div className={classes.SubmitBtn} onClick={LoginHandler}>
                        LOGIN
                    </div>
                </form>
            </div>
        )

        let signUp = (
            <div className={classes.Signup}>
                Don't have an account? <NavLink to="/signup" exact>Sign Up</NavLink> 
        
            </div>
        )

        // let errorMessage = (
        //     <div className={classes.ErrorMessage}>
        //         Oops Wrong Password
        //     </div>
        // );

        // if(!this.state.validationFail){
        //     errorMessage = null;
        // }

        return(
            <div className={classes.Login}> 
                
                    <div className={classes.LoginContainer}>
                    {loginForm}
                    {/* {errorMessage} */}
                    
                    {signUp}
                    </div>

                

            </div>
        )
    
}

export default Login; 