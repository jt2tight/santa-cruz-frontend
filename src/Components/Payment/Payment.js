import React from 'react';
import { useHistory } from 'react-router';
import classes from './Payment.module.css';
import DetailsWidget from '../BuildSummary/SummaryWidget/DetailsWidget';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const Payment= (props) => {
    window.scrollTo(0, 0)
    const history = useHistory();


    const bike = JSON.parse(localStorage.getItem('bikeBuild'))

    const handleToken = (token, addresses) => {
        console.log({token, addresses})

        const order = {
            frame: bike.frame,
            fork: bike.fork,
            derailleur: bike.derailleur,
            brakes: bike.brakes,
            wheels:  bike.wheels,
            tires: bike.tires,
            totalPrice: bike.totalPrice,
            contact: props.shippingInfo,
            userId: props.userId,
            swiftPaymentToken: token


        }

        axios.post('https://santa-cruz-backend.herokuapp.com/orders/post-checkout', order)
        .then(res => {
            // console.log(res)
            if(res.status === 201){
                props.getOrderSuccess(res.data.orderNumber)
                //On Success Redirect
            history.replace('/order/' +  res.data.orderNumber + '/confirmation')

                
                
            }
            
        })
        .then(res => {
            
        })
        .catch(err => {
            console.log(err)
        })


        
    }

    return(
        <div className={classes.Payment}>
            <div className={classes.InnerPayment}>
            <div className={classes.PaymentDetails}>
            <h1>My order</h1>
            <hr/>
            
            <div className={classes.ShippingInfo}>
            <div className={classes.InfoCard}>
            <h3>Customer Info</h3>
            <ul>
                <li>{props.shippingInfo.firstName} {props.shippingInfo.lastName}</li>
                <li>{props.shippingInfo.email}</li>
                <li>{props.shippingInfo.phone}</li>
            </ul>
            </div>
            <div className={classes.InfoCard}>
            <h3>Shipping Address</h3>
            <ul>
                <li>{props.shippingInfo.address1}</li>
                { props.shippingInfo.address2 ? <li>{props.shippingInfo.address2}</li> : null }
                <li>{props.shippingInfo.city}, {props.shippingInfo.state}</li>
                <li>{props.shippingInfo.zipcode}</li>
                
                
            </ul>
            </div>
            
            </div>
            <hr />
            <div className={classes.BikeDetails}>
            
            
            <DetailsWidget 
            // image={bike.frame.image} 
            material={bike.frame.material}
            size={bike.frame.size}
            fork={bike.fork.name}
            derailleur={bike.derailleur.name}
            brakes={bike.brakes.name}
            wheels={bike.wheels.name}
            tires={bike.tires.name}
            totalPrice={bike.totalPrice}
            />
            
            <img src={bike.frame.image} alt="" />
            
            <div className={classes.TotalSummary}>
                <h3>Total</h3>
                <h1>${bike.totalPrice}</h1>
                <StripeCheckout
                    stripeKey='pk_test_51HmMH5A7ie4l3C4y2PDsS0Pp0qyy03w9ZvZ9yIUOI2UdcKg2hunLY7U8Cy6JVtrehZC5fkd0c5IGeYBvQDTJ68Fx00eOH9dsUd'
                    token={handleToken}
                />
            </div>
            </div>
            
            
            
            
            <hr/>
            

            </div>
            </div>
        </div>
    )
    
}

export default Payment; 