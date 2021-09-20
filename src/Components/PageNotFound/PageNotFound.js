import React from 'react';
import classes from './PageNotFound.module.css';
import bikecrash from '../../images/mtb_crash1.jpg';

const PageNotFound = () => {
    window.scrollTo(0, 0)

    return(
    <div className={classes.PageNotFound}>
        <h1>404: Page Not Found</h1>
        <h2>Oops... Looks like you took a wrong turn...</h2>
        <img src={bikecrash} alt="" />
        
    </div>
)}

export default PageNotFound;