import React from 'react';
import classes from './OrderConfirmation.module.css';
import Logo from '../Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const OrderConfirmation = () => {
    window.scrollTo(0, 0)

    return(
        <div className={classes.OrderConfirmation}>
            <FontAwesomeIcon icon={faCheck} className={classes.Success}/>
            <h1>Your order has been placed!</h1>
            
            <h3>Thanks for Joining the Santa Cruz Family!</h3>
            <p>You will receive a confirmation email with your order details.</p>
            <p>You can also view your oders in your account page.</p>
            <h2>Connect with Us On Social Media</h2>
            <div className={classes.SocialMedia}>
            <Logo />
            <FontAwesomeIcon className={classes.Icons} icon={faInstagram} />
            <FontAwesomeIcon className={classes.Icons} icon={faFacebook} />
            <FontAwesomeIcon className={classes.Icons} icon={faTwitter} />
            </div>
        </div>
    )
}

export default OrderConfirmation; 