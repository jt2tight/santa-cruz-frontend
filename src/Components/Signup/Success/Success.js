import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Success.module.css';

const Success = () =>{ 
    window.scrollTo(0, 0)
    let history = useHistory(); 

    setTimeout(()=>{
        history.replace('/login')
    }, 3000)

    return(
        <div className={classes.Success}>
            <h2>Account Created!</h2>
        </div>
    )
};

export default Success; 