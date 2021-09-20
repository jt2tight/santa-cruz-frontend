import React from 'react';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <div className={classes.Footer}>
        <div className={classes.InnerFooter}>
            <div className={classes.FooterCard}>
                <h3>STAY CONNECTED</h3>
                <p>Subscribe to our news letter to stay up to date</p>
            <div className={classes.NewsLetterSubscribe}>
            <input type="text" name="email" placeholder="Email"></input>
            <button>SUBSCRIBE</button>
            </div>
            <ul className={classes.SocialMediaLinks}>
                <li><FontAwesomeIcon className={classes.Icons} icon={faInstagram} /></li>
                <li><FontAwesomeIcon className={classes.Icons} icon={faFacebook} /></li>
                <li><FontAwesomeIcon className={classes.Icons} icon={faTwitter} /></li>
            </ul>
            </div>
            <div className={classes.FooterCard}>
                <h3>Support</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>Locate a Dealer</li>
                    <li>Product Registration</li>
                    <li>Parts and Replacements</li>
                </ul>
            </div>
            <div className={classes.FooterCard}>
                <h3>Company</h3>
                <ul>
                    <li>Careers</li>
                    <li>Media and Marketing</li>
                    <li>Events</li>
                    <li>Race Team</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
    </div>
)

export default Footer; 