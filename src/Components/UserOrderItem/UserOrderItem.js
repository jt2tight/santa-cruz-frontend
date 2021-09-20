import React from 'react';
import classes from './UserOrderItem.module.css';

const UserOrderItem = (props) => (
    <div className={classes.UserOrderItem}>
    <div className={classes.UserOrderItemDetails}>
        <div className={classes.Action}>
            <p><a href="#">Register Serial Number</a></p>
            <p><a href="#">View Warranty</a></p>
        </div>
        <ul>
            <li><h3>Order Number</h3></li>
            <li>{props.orderNumber}</li>
        </ul>
        <ul>
            <li><h3>Order Date</h3></li>
            <li>{props.date}</li>
        </ul>
        <ul>
            <li><h3>Total</h3></li>
            <li>${props.totalPrice}</li>
        </ul>
        <img src={props.image} alt="" />
    
    </div>
    
    </div>
)

export default UserOrderItem; 