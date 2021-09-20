import React, { Component } from 'react';
import classes from './Wheels.module.css';
import ProductCard from '../ProductCard/ProductCard';
import aluminum from '../../images/wheels/alswiss.png';
import carbon from '../../images/wheels/carbon.png';

class Wheels extends Component{ 

    state = {
        name: this.props.selectedWheels.name,
        price: this.props.selectedWheels.price,
        subHead: 'Wheel'
    }


    itemChangeHandler = (wheelName, wheelPrice) => {
        this.setState({
            name: wheelName,
            price: wheelPrice
        }, ()=> this.props.parentCallback(this.state))   

    }
    
    render(){
    
        
    return(
    <div className={classes.Wheels}>
        <ProductCard 
            image={aluminum} 
            name="DT Swiss XM"
            info='27.5" Tubeless Aluminium Wheels'
            price="650"
            clicked={() => this.itemChangeHandler('DT Swiss XM', 650)}
            selected={this.state.name === 'DT Swiss XM' ? true : false}
        />

        <ProductCard 
            image={carbon} 
            name="Specialized Carbon SL"
            info='27.5" Tubeless Carbon Wheels'
            price="2000"
            clicked={()=> this.itemChangeHandler('Specialized Carbon SL', 2000)}
            selected={this.state.name === 'Specialized Carbon SL' ? true : false}
        />

    </div>
)}};

export default Wheels; 