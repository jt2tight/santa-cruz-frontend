import React, { useContext } from 'react';
import classes from './Checkout.module.css';
import SelectBtn from '../../Components/SelectBtn/SelectBtn';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/auth-context';


const Checkout = (props) => { 
    const data = (JSON.parse(localStorage.getItem('bikeBuild')))
    
    localStorage.setItem('prevPage','checkout')
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    let shippingContinue = (
                        <NavLink to="/shipping" exact>
                        <SelectBtn select={props.getShipping}>
                            CHECKOUT
                        </SelectBtn>
                        </NavLink>

    )

    if(!isLoggedIn){
        shippingContinue = (
            <NavLink to="/login" exact>
                        <SelectBtn select={props.getShipping}>
                            CHECKOUT
                        </SelectBtn>
                        </NavLink>
        )
    }
    

    return(

            <div className={classes.Checkout}>
                <div className={classes.Header}>
                    <h1>MY BUILD</h1>
                    <hr />
                </div>
                <div className={classes.CheckoutDetailContainer}>
                    <div >
                        <h3>Order Summary</h3>
                        <ul>
                            <li>Frame: <ul>
                                <li>Material: {data.frame.material}</li>
                                <li>Color: {data.frame.color}</li>
                                <li>Size: {data.frame.size}</li>
                                
                                </ul>
                                </li>
                            
                            <li>Fork: {data.fork.name}</li>
                            <li>Derailleur: {data.derailleur.name} </li>
                            <li>Brakes: {data.brakes.name}</li>
                            <li>Wheels: {data.wheels.name}</li>
                            <li>Tires: {data.tires.name}</li>
                        </ul>
                        

                    </div>
                <div className={classes.BikeImage}>
                    <img src={data.frame.image} alt="" />
                </div>
                <div className={classes.OrderAction}>
                        <h3>Total</h3>
                        <h2>${data.totalPrice}</h2>
                        <SelectBtn select={props.back}>
                            REBUILD 
                        </SelectBtn>
                        {shippingContinue}
                </div>
                </div>


            </div>
        )
    
}

export default Checkout; 