import React from 'react';
import classes from './Logo.module.css';
import SantaCruz from '../../images/santa_cruz_bikes_blackBG.png';

const Logo = () => (
    <div className={classes.Logo} alt="">
        <img src={SantaCruz} alt=""/>
    </div>
);

export default Logo; 