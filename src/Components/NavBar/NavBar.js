import React, { useContext } from 'react';
import classes from './NavBar.module.css';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const NavBar = (props) => {

    const authCtx = useContext(AuthContext);


    const isLoggedIn = authCtx.isLoggedIn;
    const userId = localStorage.getItem('userId')
    const userAccount = '/id=' + userId + '/my-account';
        return(
            <div className={classes.NavBar}>
                <div className={classes.LogoContainer} >
                <Logo />
                </div>
                <div className={classes.NavLinks}>
                <ul>
                    <li><NavLink to="/" exact>HOME</NavLink></li>
                    <li>SPECS</li>
                    { isLoggedIn ? <li><NavLink to ={userAccount} exact>MY ACCOUNT</NavLink></li> : <li><NavLink to="/login" exact>LOGIN</NavLink></li> }
                    { isLoggedIn ? <li onClick={()=> authCtx.logout()}><NavLink to='/'>LOG OUT</NavLink></li> : null}
                </ul>
                </div>

            </div>
        )
    
};

export default NavBar; 