import React from 'react';
import classes from './ProductCard.module.css';
import SelectBtn from '../SelectBtn/SelectBtn';


const ProductCard = (props) => {

    let productStyle = classes.ProductCard;

    if(props.selected){
        productStyle = classes.Active;
    } 


    

        return(
    <div className={productStyle} style={props.activeStyle}>
        <div>
            <img src={props.image} alt="" />
        </div>
        <div className={classes.Header}>
            <h2>{props.name}</h2>
        </div>
        <div className={classes.Info}>
            {props.info}
        </div>
        <div className={classes.Price}>
            ${props.price}
        </div>
        <div className={classes.Action}>
            <SelectBtn select={props.clicked} active={props.selected}>
                SELECT 
            </SelectBtn>
        </div>
    </div>
)};

export default ProductCard;