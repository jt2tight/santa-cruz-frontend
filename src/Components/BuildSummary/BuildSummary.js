import React, { Component } from 'react';
import classes from './BuildSummary.module.css';
import MauveSC from '../../images/santa-cruz-5010-carbon-blackBG.png';
import GreenSC from '../../images/santa-cruz-5010grn-blackBG.png';


class BuildSummary extends Component {

    state = {
        color: this.props.selectedBike,
        price: 0.00
    }

    


    render(){
        return(
            <div className={classes.BuildSummary}>
                <div className={classes.BikeImage}>
                    <img src={this.props.selectedBike === 'Mauve' ? MauveSC : GreenSC} alt="" />
                </div>
                <div className={classes.Details}>
                    <ul>
                        <li>Frame: {this.props.frame.material}</li>
                        <li>Size: {this.props.frame.size}</li>
                        <li>{this.props.fork}</li>
                        <li>{this.props.derailleur}</li>
                        <li>{this.props.brakes}</li>
                        <li>{this.props.wheels}</li>
                        <li>{this.props.tires}</li>
                    </ul>
                </div>
                <div className={classes.OrderSummary}>
                    <p>Total</p>
                    <p><h2>${this.props.totalPrice}</h2></p>
                    
                </div>
                <div className={classes.Checkout}>
                    <div className={classes.CheckoutBtn} onClick={()=> this.props.checkout()}>
                    CHECK OUT
                    </div>
                </div>

            </div>
        )
    }
};

export default BuildSummary; 