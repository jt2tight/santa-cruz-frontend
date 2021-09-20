import React from 'react';
import classes from './BuilderNav.module.css';

const BuilderNav = (props) => (
    <div className={classes.BuilderNav}>
        <ul>
            
            <li onClick={()=> {props.parentCallback({
                frame: true,
                forks: false,
                derailleur: false,
                brakes: false,
                wheels: false,
                tires: false,
                subHead: 'Frame'
            
            })
            }}
            >Frame</li>
            <li onClick={()=> {props.parentCallback({
                frame: false,
                forks: true,
                derailleur: false,
                brakes: false,
                wheels: false,
                tires: false,
                subHead:'Fork'
            })}}>Fork</li>
            <li onClick={()=> {props.parentCallback({
                frame: false,
                forks: false,
                derailleur: true,
                brakes: false,
                wheels: false,
                tires: false,
                subHead: 'Derailleur'
            })}}
            >Derailleur</li>
            <li onClick={()=> {props.parentCallback({
                frame: false,
                forks: false,
                derailleur: false,
                brakes: true,
                wheels: false,
                tires: false,
                subHead: 'Brakes'
            })}}
            >Brakes</li>
            <li onClick={()=> {props.parentCallback({
                frame: false,
                forks: false,
                derailleur: false,
                brakes: false,
                wheels: true,
                tires: false,
                subHead: 'Wheels'
            })}}
            >Wheels</li>
            <li onClick={()=> {props.parentCallback({
                frame: false,
                forks: false,
                derailleur: false,
                brakes: false,
                wheels: false,
                tires: true,
                subHead: 'Tires'
            })}}
            >Tires</li>
        </ul>

    </div>
)

export default BuilderNav; 