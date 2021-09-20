import React, { Component } from 'react';
import classes from './Forks.module.css';
import ProductCard from '../ProductCard/ProductCard';
import FoxRhythm from '../../images/forks/fox34.png';
import FoxPike from '../../images/forks/foxPike.png'

class Forks extends Component{ 

    state = {
        name: this.props.selectedFork.name,
        price: this.props.selectedFork.price,
        subHead: 'Fork'
    }


    itemChangeHandler = (forkName, forkPrice) => {
        this.setState({
            name: forkName,
            price: forkPrice
        }, ()=> this.props.parentCallback(this.state))   

    }
    
    render(){
    
        
    return(
    <div className={classes.Forks}>
        <ProductCard 
            image={FoxRhythm} 
            name="Fox Rhythm 34"
            info="140mm Travel"
            price="900"
            clicked={() => this.itemChangeHandler('Fox Rhythm 34', 900)}
            selected={this.state.name === 'Fox Rhythm 34' ? true : false}
        />

        <ProductCard 
            image={FoxPike} 
            name="Fox Pike RCT"
            info="150mm Travel"
            price="1200"
            clicked={()=> this.itemChangeHandler('Fox Pike RCT', 1200)}
            selected={this.state.name === 'Fox Pike RCT' ? true : false}
        />

    </div>
)}};

export default Forks; 