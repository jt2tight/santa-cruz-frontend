import React, { Component } from 'react';
import classes from './Brakes.module.css';
import ProductCard from '../ProductCard/ProductCard';
import shimanoXT from '../../images/brakes/shimanoXT.png';
import sramGuide from '../../images/brakes/sramGuide.png';

class Brakes extends Component{ 

    state = {
        name: this.props.selectedBrakes.name,
        price: this.props.selectedBrakes.price,
        subHead: 'Brakes'
    }


    itemChangeHandler = (brakesName, brakesPrice) => {
        this.setState({
            name: brakesName,
            price: brakesPrice
        }, ()=> this.props.parentCallback(this.state))   

    }
    
    render(){
    
        
    return(
    <div className={classes.Brakes}>
        <ProductCard 
            image={sramGuide} 
            name="SRAM Guide"
            info="Hydraullic Disc Brakes"
            price="150"
            clicked={() => this.itemChangeHandler('SRAM Guide', 150)}
            selected={this.state.name === 'SRAM Guide' ? true : false}
        />

        <ProductCard 
            image={shimanoXT} 
            name="Shimano XT"
            info="Hydraullic Disc Brakes"
            price="190"
            clicked={()=> this.itemChangeHandler('Shimano XT', 190)}
            selected={this.state.name === 'Shimano XT' ? true : false}
        />

    </div>
)}};

export default Brakes; 