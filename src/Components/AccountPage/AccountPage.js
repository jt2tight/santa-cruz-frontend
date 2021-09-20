import React, { Component } from 'react';
import classes from './AccountPage.module.css';
import axios from 'axios';
import UserOrderItem from '../UserOrderItem/UserOrderItem';

class AccountPage extends Component{

    state = {

        userId: this.props.userId,
        email: null,
        orders: [{id: 123}],
        loading: true
    }

    componentDidMount(){
        const url = 'https://santa-cruz-backend.herokuapp.com/userAuth/getUserInfo'

        axios.post(url, {id : this.props.userId})
            .then(res => {
                this.setState({
                    email: res.data.email,
                    orders: res.data.orders,
                    loading: false

                }, console.log(this.state))
                
            })
            .catch(err => {
                console.log(err)
            })
        console.log(this.state)
    }



    componentDidUpdate(){
        console.log(this.state)
    }

    render(){
        window.scrollTo(0, 0)
        
        let ordersList = <div></div>

        if(!this.state.loading){

    


        ordersList = this.state.orders.map(order => {
            return <UserOrderItem
                image={order.bike.frame.image}
                orderNumber={order.id}
                date={order.date.slice(0,16)}
                totalPrice={order.bike.totalPrice}
            />
            
        })

    }
    


        return(
            <div className={classes.AccountPage}>
                <div className={classes.AccountDetails}>
                    <div className={classes.AccountHeader}>
                    <div className={classes.DetailsBox}>
                    <h3>My Account</h3>
                    
                    {this.state.email}
                    <p>Update Email</p>
                    <p>Reset Password</p>
                    </div>
                    <div className={classes.CustomerSupport}>
                        <h3>Have Questions?</h3>
                        <p>Contact Customer Support</p>
                        <p><a href="#">customersupport@santacruz.bikes</a></p>
                        <p>+1 (800) 123-4567</p>
                    </div>
                    </div>
                    <hr />
                    <div className={classes.MyOrders}>
                    <h1>My Orders</h1>
                    {ordersList}
                    </div>
                    
                </div>
                

            </div>
        )
    }
};

export default AccountPage; 