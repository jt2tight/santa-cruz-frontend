import React from 'react';
import classes from './SummaryWidget.module.css';

const DetailsWidget = (props) => {


    return(
        
            <div className={classes.Details}>
                    <ul>
                        <li>Frame: {props.material}</li>
                        <li>Size: {props.size}</li>
                        <li>{props.fork}</li>
                        <li>{props.derailleur}</li>
                        <li>{props.brakes}</li>
                        <li>{props.wheels}</li>
                        <li>{props.tires}</li>
                    </ul>
                </div>
        
    )
}

export default DetailsWidget; 