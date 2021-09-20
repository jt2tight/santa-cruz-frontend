import React from 'react';
import classes from './SummaryWidget.module.css';
import DetailsWidget from './DetailsWidget';

const SummaryWidget = (props) => (
    <div className={classes.SummaryWidget}>
                <DetailsWidget
                material = {props.material}
                size = {props.size}
                fork = {props.fork}
                derailleur = {props.derailleur}
                brakes = {props.brakes}
                wheels = {props.wheels}
                tires = {props.tires}
                
                />
                
                <div className={classes.BikeImage}>
                    <img src={props.image} alt="" />
                </div>
                <div className={classes.OrderSummary}>
                    <p>Total</p>
                    <p><h2>${props.totalPrice}</h2></p>
                    
                </div>
    </div>
);

export default SummaryWidget; 