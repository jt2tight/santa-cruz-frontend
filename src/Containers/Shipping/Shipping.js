import React, { Component } from 'react';
import classes from './Shipping.module.css';
import { Redirect } from 'react-router';
import SummaryWidget from '../../Components/BuildSummary/SummaryWidget/SummaryWidget';
import axios from 'axios';


class Shipping extends Component{

    state = {
        customerInfo: {
            firstName: '',
            lastName: '',
            email:'',
            phone:'',
            address1:'',
            address2: null,
            city:'',
            state:'',
            country:'',

        },

        bike: {
            frame: {
                image: '',
                material: 'carbon',
                color: 'black',
                size: 'small'
            },
            fork: 'black',
            derailleur: 'blackk',
            brakes: 'black',
            wheels:'black',
            tires:'black',
            totalPrice:'1000'

        },

        resStatus : null,
        orderNumber: null,
                

    }

    submitOrder = () => {

       
        const userId = localStorage.getItem('userId')

        const build = JSON.parse(localStorage.getItem('bikeBuild'))
        localStorage.setItem('prevpage', 'checkout');

        localStorage.setItem('contactInfo', this.state.customerInfo)


        this.props.getShippingInfo(this.state.customerInfo)

        this.setState({
            resStatus: 201
        })


    }

    handleChange = (e) => {
        let formData = this.state.customerInfo;
        let updatedFormData = {...formData, 
            [e.target.name] : e.target.value
        }

        this.setState({
            customerInfo: updatedFormData
        })
    }

    renderRedirect(){
        if (this.state.resStatus === 201)
        return <Redirect to="/shipping/payment" />

    }


    componentDidMount(){
        window.scrollTo(0, 0)
        let data = JSON.parse(localStorage.getItem('bikeBuild'));
        this.setState({
            bike: data
        })

    }


    render(){



       

        let form = (
            <form>
                        <div className={classes.OrderContact}>
                            <div className={classes.SubHeader}>
                            <h2>Contact</h2>
                            </div>
                            <input  className={classes.Input} name="firstName" placeholder="First Name" onChange={this.handleChange}/>
                            <input className={classes.Input} name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                            <input className={classes.Input} type="text" name="email" placeholder="E-mail" onChange={this.handleChange}/>
                            <input className={classes.Input} type="text" name="phone" placeholder="Phone Number"onChange={this.handleChange}/>
                        </div>
                        <div className={classes.SubHeader}>
                        <h2>Shipping Address</h2>
                        </div>
                            <input className={classes.Input} type="text" name="address1" placeholder="Address Line 1" onChange={this.handleChange}/>
                            <input className={classes.Input} type="text" name="address2" placeholder="Address Line 2 (optional)" onChange={this.handleChange}/>
    
                            <input className={classes.Input} type="text" name="city" placeholder="City" onChange={this.handleChange}/>
                            <input className={classes.Input} type="text" name="state" placeholder="State" onChange={this.handleChange}/>
                            <input className={classes.Input} type="text" name="zipcode" placeholder="Zipcode" onChange={this.handleChange}/>
                            <input className={classes.Input} type="text" name="country" placeholder="Country" onChange={this.handleChange}/>
                      
                        <div className={classes.SubmitBtn} onClick={this.submitOrder}>
                            CONTINUE
                            {this.renderRedirect()}
                        </div>
                        
            </form>
        )

        let BuildSummary = (
            <SummaryWidget
                        image={this.state.bike.frame.image} 
                        material={this.state.bike.frame.material}
                        size={this.state.bike.frame.size}
                        fork={this.state.bike.fork.name}
                        derailleur={this.state.bike.derailleur.name}
                        brakes={this.state.bike.brakes.name}
                        wheels={this.state.bike.wheels.name}
                        tires={this.state.bike.tires.name}
                        totalPrice={this.state.bike.totalPrice}
                    
            />

        )

        if(this.state.bike === null){
            BuildSummary = <div>Loading...</div>
        }

        return(
            <div className={classes.Shipping}>
                
                <div className={classes.ShippingContainer}>
                <div className={classes.OrderSummary}>
                    <h2>MY BIKE</h2>
                    {BuildSummary}
                </div>
                <hr />
                    <div className={classes.ShippingForm}>
                        <h1>SHIPPING INFO</h1>
                        {form}
                    </div>
                
                </div>
                
            
            </div>
        )
    }
}

export default Shipping; 