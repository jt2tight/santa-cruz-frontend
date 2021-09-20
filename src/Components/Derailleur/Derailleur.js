import React, { Component } from 'react';
import classes from './Derailleur.module.css';
import ProductCard from '../ProductCard/ProductCard';
import sramGX from '../../images/derailleurs/sramGX.png';
import sramX from '../../images/derailleurs/sramx01.gif'

class Derailleur extends Component{ 

    state = {
        name: this.props.selectedDerailleur.name,
        price: this.props.selectedDerailleur.price,
        subHead: 'Derailleur'
    }


    itemChangeHandler = (derailleurName, derailleurPrice) => {
        this.setState({
            name: derailleurName,
            price: derailleurPrice
        }, ()=> this.props.parentCallback(this.state))   

    }
    
    render(){
    
        
    return(
    <div className={classes.Derailleur}>
        <ProductCard 
            image={sramGX} 
            name="SRAM GX Eagle"
            info="12 speed drivetrain and shifter"
            price="350"
            clicked={() => this.itemChangeHandler('SRAM GX Eagle', 350)}
            selected={this.state.name === 'SRAM GX Eagle' ? true : false}
        />

        <ProductCard 
            image={sramX} 
            name="SRAM X01"
            info="12 speed drivetrain and shifter"
            price="600"
            clicked={()=> this.itemChangeHandler('SRAM X01', 600)}
            selected={this.state.name === 'SRAM X01' ? true : false}
        />

    </div>
)}};

export default Derailleur; 