import React, { Component } from 'react';
import classes from './Tires.module.css';
import ProductCard from '../ProductCard/ProductCard';
import black from '../../images/tires/black.png';
import tan from '../../images/tires/tan.png';

class Tires extends Component{ 

    state = {
        name: this.props.selectedTires.name,
        price: this.props.selectedTires.price,
        subHead: 'Tires'
    }


    itemChangeHandler = (tiresName, tiresPrice) => {
        this.setState({
            name: tiresName,
            price: tiresPrice
        }, ()=> this.props.parentCallback(this.state))   

    }
    
    render(){
    
        
    return(
    <div className={classes.Tires}>
        <ProductCard 
            image={black} 
            name="Maxxis Minion DHF (black)"
            info="2.6 Wide Trail EXO"
            price="70"
            clicked={() => this.itemChangeHandler('Maxxis Minion DHF (black)', 70)}
            selected={this.state.name === 'Maxxis Minion DHF (black)' ? true : false}
        />

        <ProductCard 
            image={tan} 
            name="Maxxis Minion DHF (tan)"
            info="2.6 Wide Trail EXO"
            price="70"
            clicked={()=> this.itemChangeHandler('Maxxis Minion DHF (tan)', 70)}
            selected={this.state.name === 'Maxxis Minion DHF (tan)' ? true : false}
        />

    </div>
)}};

export default Tires; 