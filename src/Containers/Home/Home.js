import React, { Component } from 'react';
import classes from './Home.module.css';
import axios from 'axios';
import NavBar from '../../Components/NavBar/NavBar';
import Landing from '../Landing/Landing';
import BikeBuilder from '../BikeBuilder/BikeBuilder';
import Checkout from '../Checkout/Checkout';


class Home extends Component{

    state={
        bike: {childData:{}},
        desktop: true,
        mobile: false,
        checkout: false,
        builder: true,
        builderClass: 'classes.BikeBuilder'
    }


    getData = (childData) => {
        this.setState({
            bike: {childData}
        })
    }

    getCheckout = (childData) => {
        this.setState({
            bike: {childData},
            checkout: true,
            builder: false,
            

        })
        
    }

    returnToBuilder = () =>{
        this.setState({
            bike: JSON.parse(localStorage.getItem('bikeBuild')),
            checkout: false,
            builder: true

        })

    }

    submitOrderHandler = () => {
        const build = JSON.parse(localStorage.getItem('bikeBuild'))
        localStorage.setItem('prevpage', 'checkout');

        const order = {
            frame: build.frame,
            fork: build.fork,
            derailleur: build.derailleur,
            brakes: build.brakes,
            wheels:  build.wheels,
            tires: build.tires,
            totalPrice: build.totalPrice


        }

        axios.post('http://localhost:3050/orders/post-checkout', order)
        .then(result => {
            console.log(order)
        }).catch(err => {
            console.log(err)
        })

        
    }    

    componentDidMount(){
        localStorage.setItem('prevpage','home')
        
    }




    render(){


    

    return(
    <div className={classes.Desktop} >
        
        <NavBar/>
        <Landing />
        {this.state.builder ? <BikeBuilder getData={this.getData} getCheckout={this.getCheckout}/> : null}
        {this.state.checkout ? <Checkout id="checkout" name="checkout" order={this.state.bike.childData} back={this.returnToBuilder} /> : null }
        
        
    </div>
)}};

export default Home; 